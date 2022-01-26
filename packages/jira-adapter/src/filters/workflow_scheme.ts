/*
*                      Copyright 2022 Salto Labs Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import { BuiltinTypes, Change, CORE_ANNOTATIONS, ElemID, Field, getChangeData, InstanceElement, isAdditionOrModificationChange, isInstanceChange, isInstanceElement, isModificationChange, ListType, ObjectType, Values } from '@salto-io/adapter-api'
import { elements as elementUtils, client as clientUtils } from '@salto-io/adapter-components'
import { logger } from '@salto-io/logging'
import { collections } from '@salto-io/lowerdash'
import { applyFunctionToChangeData, resolveValues, safeJsonStringify } from '@salto-io/adapter-utils'
import _ from 'lodash'
import { getLookUpName } from '../reference_mapping'
import { findObject } from '../utils'
import { FilterCreator } from '../filter'
import { JIRA } from '../constants'
import { defaultDeployChange, deployChanges } from '../deployment'
import JiraClient from '../client/client'
import { JiraConfig } from '../config'

const { awu } = collections.asynciterable

const WORKFLOW_SCHEME_TYPE = 'WorkflowScheme'
const WORKFLOW_SCHEME_ITEM_TYPE = 'WorkflowSchemeItem'

export const MAX_TASK_CHECKS = 60
const TASK_CHECK_INTERVAL_MILLI = 1000

const log = logger(module)

function validateTaskResponse(
  response: clientUtils.Response<clientUtils.ResponseValue | clientUtils.ResponseValue[]>
): asserts response is clientUtils.Response<clientUtils.ResponseValue & { self: string }> {
  if (Array.isArray(response.data) || !_.isString(response.data.self)) {
    log.warn(`Received unexpected response from when attempted to publish workflow scheme: ${safeJsonStringify(response.data, undefined, 2)}`)
    throw new Error('Failed to publish workflow scheme draft')
  }
}

const waitForWorkflowSchemePublish = async (
  taskResponse: clientUtils.Response<clientUtils.ResponseValue | clientUtils.ResponseValue[]>,
  client: JiraClient,
  checksLeft: number,
): Promise<void> => {
  validateTaskResponse(taskResponse)

  if (taskResponse.data.result !== undefined) {
    if (taskResponse.data.status !== 'COMPLETE') {
      log.warn(`Failed to publish workflow scheme draft: ${safeJsonStringify(taskResponse.data, undefined, 2)}`)
      throw new Error('Failed to publish workflow scheme draft')
    }
    return
  }

  if (checksLeft === 0) {
    log.warn(`Publish draft operation did not finish, last response: ${safeJsonStringify(taskResponse.data, undefined, 2)}`)
    throw new Error('Failed to publish workflow scheme draft')
  }

  await new Promise(resolve => {
    setTimeout(resolve, TASK_CHECK_INTERVAL_MILLI)
  })

  await waitForWorkflowSchemePublish(
    await client.getSinglePage({ url: taskResponse.data.self }),
    client,
    checksLeft - 1,
  )
}

const publishDraft = async (
  change: Change<InstanceElement>,
  client: JiraClient,
  statusMigrations?: Values[]
): Promise<void> => {
  const response = await client.post({
    url: `/rest/api/3/workflowscheme/${getChangeData(change).value.id}/draft/publish`,
    data: statusMigrations !== undefined
      ? {
        statusMappings: statusMigrations,
      }
      : {},
  })

  await waitForWorkflowSchemePublish(response, client, MAX_TASK_CHECKS)
}

const deployWorkflowScheme = async (
  change: Change<InstanceElement>,
  client: JiraClient,
  config: JiraConfig,
): Promise<void> => {
  const instance = getChangeData(change)
  const { statusMigrations } = (await resolveValues(instance, getLookUpName)).value
  delete instance.value.statusMigrations

  const response = await defaultDeployChange({
    change,
    client,
    apiDefinitions: config.apiDefinitions,
    fieldsToIgnore: ['items'],
  })

  if (isModificationChange(change) && !Array.isArray(response) && response?.draft) {
    await publishDraft(change, client, statusMigrations)
  }
}

const filter: FilterCreator = ({ config, client }) => ({
  onFetch: async elements => {
    const workflowSchemeType = findObject(elements, WORKFLOW_SCHEME_TYPE)
    if (workflowSchemeType === undefined) {
      log.warn(`${WORKFLOW_SCHEME_TYPE} type not found`)
    } else {
      const workflowSchemeItemType = new ObjectType({
        elemID: new ElemID(JIRA, WORKFLOW_SCHEME_ITEM_TYPE),
        fields: {
          issueType: {
            refType: BuiltinTypes.STRING,
            annotations: {
              [CORE_ANNOTATIONS.CREATABLE]: true,
              [CORE_ANNOTATIONS.UPDATABLE]: true,
            },
          },
          workflow: {
            refType: BuiltinTypes.STRING,
            annotations: {
              [CORE_ANNOTATIONS.CREATABLE]: true,
              [CORE_ANNOTATIONS.UPDATABLE]: true,
            },
          },
        },
        path: [JIRA, elementUtils.TYPES_PATH, WORKFLOW_SCHEME_ITEM_TYPE],
      })

      workflowSchemeType.fields.items = new Field(
        workflowSchemeType,
        'items',
        new ListType(workflowSchemeItemType),
        {
          [CORE_ANNOTATIONS.CREATABLE]: true,
          [CORE_ANNOTATIONS.UPDATABLE]: true,
        }
      )

      if (workflowSchemeType.fields.issueTypeMappings !== undefined) {
        delete workflowSchemeType.fields.issueTypeMappings
      }

      const statusMigrationType = new ObjectType({
        elemID: new ElemID(JIRA, 'StatusMigration'),
        fields: {
          issueTypeId: {
            refType: BuiltinTypes.STRING,
            annotations: { [CORE_ANNOTATIONS.UPDATABLE]: true },
          },
          statusId: {
            refType: BuiltinTypes.STRING,
            annotations: { [CORE_ANNOTATIONS.UPDATABLE]: true },
          },
          newStatusId: {
            refType: BuiltinTypes.STRING,
            annotations: { [CORE_ANNOTATIONS.UPDATABLE]: true },
          },
        },
        path: [JIRA, elementUtils.TYPES_PATH, 'StatusMigration'],
      })

      workflowSchemeType.fields.statusMigrations = new Field(
        workflowSchemeType,
        'statusMigrations',
        new ListType(statusMigrationType),
        {
          [CORE_ANNOTATIONS.UPDATABLE]: true,
        }
      )

      elements.push(workflowSchemeItemType, statusMigrationType)
    }

    elements
      .filter(isInstanceElement)
      .filter(instance => instance.elemID.typeName === WORKFLOW_SCHEME_TYPE)
      .filter(instance => instance.value.issueTypeMappings !== undefined)
      .forEach(instance => {
        instance.value.items = Object.entries(instance.value.issueTypeMappings
          .additionalProperties ?? {}).map(([issueType, workflow]) => ({ workflow, issueType }))
        delete instance.value.issueTypeMappings
      })
  },

  preDeploy: async changes => (
    awu(changes)
      .filter(isInstanceChange)
      .filter(change => getChangeData(change).elemID.typeName === WORKFLOW_SCHEME_TYPE)
      .forEach(change => applyFunctionToChangeData<Change<InstanceElement>>(
        change,
        async instance => {
          if (instance.value.items !== undefined) {
            const resolvedInstance = await resolveValues(instance, getLookUpName)
            instance.value.issueTypeMappings = _(resolvedInstance.value.items)
              .keyBy(mapping => mapping.issueType)
              .mapValues(mapping => mapping.workflow)
              .value()
          }

          if (isModificationChange(change)) {
            instance.value.updateDraftIfNeeded = true
          }

          return instance
        }
      ))
  ),

  deploy: async changes => {
    const [relevantChanges, leftoverChanges] = _.partition(
      changes,
      change => isInstanceChange(change)
        && isAdditionOrModificationChange(change)
        && getChangeData(change).elemID.typeName === WORKFLOW_SCHEME_TYPE
    )


    const deployResult = await deployChanges(
      relevantChanges
        .filter(isInstanceChange)
        .filter(isAdditionOrModificationChange),
      async change => deployWorkflowScheme(change, client, config),
    )

    return {
      leftoverChanges,
      deployResult,
    }
  },

  onDeploy: async changes => (
    awu(changes)
      .filter(isInstanceChange)
      .filter(change => getChangeData(change).elemID.typeName === WORKFLOW_SCHEME_TYPE)
      .forEach(change => applyFunctionToChangeData<Change<InstanceElement>>(
        change,
        async instance => {
          delete instance.value.issueTypeMappings
          if (isModificationChange(change)) {
            delete instance.value.updateDraftIfNeeded
          }
          return instance
        }
      ))
  ),
})

export default filter
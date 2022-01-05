/*
*                      Copyright 2021 Salto Labs Ltd.
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
import { BuiltinTypes, Change, CORE_ANNOTATIONS, ElemID, Field, InstanceElement, ListType, ObjectType, toChange } from '@salto-io/adapter-api'
import { deployment, client as clientUtils } from '@salto-io/adapter-components'
import { MockInterface } from '@salto-io/test-utils'
import { JIRA } from '../../../src/constants'
import { mockClient } from '../../utils'
import issueTypeSchemeFilter from '../../../src/filters/issue_type_schemas/issue_type_scheme'
import { Filter } from '../../../src/filter'
import JiraClient from '../../../src/client/client'
import { DEFAULT_CONFIG } from '../../../src/config'

jest.mock('@salto-io/adapter-components', () => {
  const actual = jest.requireActual('@salto-io/adapter-components')
  return {
    ...actual,
    deployment: {
      ...actual.deployment,
      deployChange: jest.fn(),
    },
  }
})

describe('issueTypeScheme', () => {
  let type: ObjectType
  let filter: Filter
  let mockConnection: MockInterface<clientUtils.APIConnection>
  beforeEach(async () => {
    const { client, paginator, connection } = mockClient()
    mockConnection = connection

    filter = issueTypeSchemeFilter({
      client,
      paginator,
      config: DEFAULT_CONFIG,
    })
    type = new ObjectType({
      elemID: new ElemID(JIRA, 'IssueTypeScheme'),
      fields: {
        issueTypeIds: { refType: new ListType(BuiltinTypes.STRING) },
      },
    })
  })

  describe('onFetch', () => {
    it('replace id with issueTypeSchemeId in type', async () => {
      type.fields.id = new Field(type, 'id', BuiltinTypes.STRING)
      await filter.onFetch?.([type])
      expect(type.fields.id).toBeUndefined()
      expect(type.fields.issueTypeSchemeId).toBeDefined()
      expect(type.fields.issueTypeSchemeId.annotations)
        .toEqual({ [CORE_ANNOTATIONS.HIDDEN_VALUE]: true })
    })

    it('replace id with issueTypeSchemeId in instances', async () => {
      const instance = new InstanceElement(
        'instance',
        type,
        { id: '2' }
      )
      await filter.onFetch?.([instance])
      expect(instance.value).toEqual({ issueTypeSchemeId: '2' })
    })

    it('add the updatable annotation to issueTypeIds', async () => {
      await filter.onFetch?.([type])
      expect(type.fields.issueTypeIds.annotations)
        .toEqual({ [CORE_ANNOTATIONS.UPDATABLE]: true })
    })
  })

  describe('deploy', () => {
    it('should return irrelevant changes in leftoverChanges', async () => {
      const res = await filter.deploy?.([
        toChange({ after: type }),
        toChange({ after: new InstanceElement('instance1', type) }),
        toChange({
          before: new InstanceElement('instance2', new ObjectType({ elemID: new ElemID(JIRA, 'someType') })),
          after: new InstanceElement('instance2', new ObjectType({ elemID: new ElemID(JIRA, 'someType') })),
        }),
      ])
      expect(res?.leftoverChanges).toHaveLength(3)
      expect(res?.deployResult).toEqual({ appliedChanges: [], errors: [] })
    })

    describe('When deploying a change', () => {
      const deployChangeMock = deployment.deployChange as jest.MockedFunction<
        typeof deployment.deployChange
      >
      let change: Change<InstanceElement>

      beforeEach(async () => {
        const beforeInstance = new InstanceElement(
          'instance',
          type,
          {
            issueTypeSchemeId: '1',
            name: 'name1',
            issueTypeIds: ['1', '2', '3'],
          }
        )

        const afterInstance = new InstanceElement(
          'instance',
          type,
          {
            issueTypeSchemeId: '1',
            name: 'name2',
            issueTypeIds: ['6', '1', '5', '3'],
          }
        )

        change = toChange({ before: beforeInstance, after: afterInstance })

        await filter.deploy?.([change])
      })
      it('should call deployChange and ignore issueTypeIds', () => {
        expect(deployChangeMock).toHaveBeenCalledWith(
          change,
          expect.any(JiraClient),
          expect.any(Object),
          ['issueTypeIds'],
          undefined
        )
      })

      it('should call the endpoint to add the new issue types ids', () => {
        expect(mockConnection.put).toHaveBeenCalledWith(
          '/rest/api/3/issuetypescheme/1/issuetype',
          {
            issueTypeIds: ['6', '5'],
          },
          undefined,
        )
      })

      it('should call the endpoint to remove the removed issue types ids', () => {
        expect(mockConnection.delete).toHaveBeenCalledWith(
          '/rest/api/3/issuetypescheme/1/issuetype/2',
          undefined
        )
      })

      it('should call the endpoint to re-order the issue types ids', () => {
        expect(mockConnection.put).toHaveBeenCalledWith(
          '/rest/api/3/issuetypescheme/1/issuetype/move',
          {
            issueTypeIds: ['6', '1', '5', '3'],
            position: 'First',
          },
          undefined,
        )
      })
    })

    it('should not call the new issue type ids endpoint of there are no new ids', async () => {
      const beforeInstance = new InstanceElement(
        'instance',
        type,
        {
          issueTypeSchemeId: '1',
          name: 'name1',
          issueTypeIds: ['1', '2', '3'],
        }
      )

      const afterInstance = new InstanceElement(
        'instance',
        type,
        {
          issueTypeSchemeId: '1',
          name: 'name2',
          issueTypeIds: ['1', '2'],
        }
      )

      await filter.deploy?.([toChange({ before: beforeInstance, after: afterInstance })])
      expect(mockConnection.put).not.toHaveBeenCalledWith(
        '/rest/api/3/issuetypescheme/1/issuetype',
        expect.any(Object),
        undefined,
      )
    })

    it('should not call the re-order endpoint of there are no changes in the ids', async () => {
      const beforeInstance = new InstanceElement(
        'instance',
        type,
        {
          issueTypeSchemeId: '1',
          name: 'name1',
          issueTypeIds: ['1', '2', '3'],
        }
      )

      const afterInstance = new InstanceElement(
        'instance',
        type,
        {
          issueTypeSchemeId: '1',
          name: 'name2',
          issueTypeIds: ['1', '2', '3'],
        }
      )

      await filter.deploy?.([toChange({ before: beforeInstance, after: afterInstance })])
      expect(mockConnection.put).not.toHaveBeenCalledWith(
        '/rest/api/3/issuetypescheme/1/issuetype/move',
        expect.any(Object),
        undefined,
      )
    })

    it('should not call the re-order endpoint of there are no ids', async () => {
      const beforeInstance = new InstanceElement(
        'instance',
        type,
        {
          issueTypeSchemeId: '1',
          name: 'name1',
        }
      )

      const afterInstance = new InstanceElement(
        'instance',
        type,
        {
          issueTypeSchemeId: '1',
          name: 'name2',
        }
      )

      await filter.deploy?.([toChange({ before: beforeInstance, after: afterInstance })])
      expect(mockConnection.put).not.toHaveBeenCalledWith(
        '/rest/api/3/issuetypescheme/1/issuetype/move',
        expect.any(Object),
        undefined,
      )
    })

    it('should return the errors', async () => {
      const beforeInstance = new InstanceElement(
        'instance',
        type,
        {
          issueTypeSchemeId: '1',
          name: 'name1',
          issueTypeIds: ['1', '2', '3'],
        }
      )

      const afterInstance = new InstanceElement(
        'instance',
        type,
        {
          issueTypeSchemeId: '1',
          name: 'name2',
        }
      )
      mockConnection.delete.mockRejectedValueOnce(new Error('some error'))
      const res = await filter.deploy?.(
        [toChange({ before: beforeInstance, after: afterInstance })]
      )
      expect(res?.deployResult.errors).toEqual([new Error('Failed to delete /rest/api/3/issuetypescheme/1/issuetype/1 with error: Error: some error')])
      expect(res?.deployResult.appliedChanges).toEqual([])
    })
  })
})
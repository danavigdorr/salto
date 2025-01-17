/*
 *                      Copyright 2024 Salto Labs Ltd.
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
import _ from 'lodash'
import { ElemIdGetter, Element, ObjectType, SeverityLevel, Values } from '@salto-io/adapter-api'
import { safeJsonStringify } from '@salto-io/adapter-utils'
import { logger } from '@salto-io/logging'
import { values as lowerdashValues } from '@salto-io/lowerdash'
import { ElementQuery } from '../query'
import { FetchElements } from '../types'
import { generateInstancesWithInitialTypes } from './instance_element'
import { adjustFieldTypes } from './type_utils'
import { ElementAndResourceDefFinder } from '../../definitions/system/fetch/types'
import { InvalidSingletonType } from '../../config/shared' // TODO move

const log = logger(module)

export type ElementGenerator = {
  /*
   * send the element generator entries that will become an instance of the specified type
   * (if the type's definition contains standalone fields, then more than one instance).
   * the generator runs basic validations and adds the entries to the queue.
   */
  pushEntries: (args: { typeName: string; entries: unknown[] }) => void

  // produce all types and instances based on all entries processed until now
  generate: () => FetchElements
}

export const getElementGenerator = ({
  adapterName,
  defQuery,
  predefinedTypes,
  getElemIdFunc,
}: {
  adapterName: string
  fetchQuery: ElementQuery
  defQuery: ElementAndResourceDefFinder
  predefinedTypes?: Record<string, ObjectType>
  getElemIdFunc?: ElemIdGetter
}): ElementGenerator => {
  const valuesByType: Record<string, Values[]> = {}

  const pushEntries: ElementGenerator['pushEntries'] = ({ typeName, entries }) => {
    const { element: elementDef } = defQuery.query(typeName) ?? {}
    const valueGuard = elementDef?.topLevel?.valueGuard ?? lowerdashValues.isPlainObject
    const [validEntries, invalidEntries] = _.partition(entries, valueGuard)
    log.warn(
      '[%s] omitted %d entries of type %s that did not match the value guard, first item:',
      adapterName,
      invalidEntries.length,
      typeName,
      safeJsonStringify(invalidEntries[0]),
    )

    // TODO make sure type + service ids are unique
    if (valuesByType[typeName] === undefined) {
      valuesByType[typeName] = []
    }
    valuesByType[typeName].push(...validEntries)
  }

  const generate: ElementGenerator['generate'] = () => {
    const allResults = Object.entries(valuesByType).flatMap(([typeName, values]) => {
      try {
        return generateInstancesWithInitialTypes({
          adapterName,
          defQuery,
          entries: values,
          typeName,
          definedTypes: predefinedTypes,
          getElemIdFunc,
        })
      } catch (e) {
        // TODO decide how to handle error based on args (SALTO-5427)
        if (e instanceof InvalidSingletonType) {
          return { instances: [], types: [], errors: [{ message: e.message, severity: 'Warning' as SeverityLevel }] }
        }
        throw e
      }
    })
    const instances = allResults.flatMap(e => e.instances)
    const [finalTypeLists, typeListsToAdjust] = _.partition(allResults, t => t.typesAreFinal)
    const finalTypeNames = new Set(finalTypeLists.flatMap(t => t.types).map(t => t.elemID.name))
    const definedTypes = _.keyBy(
      // concatenating in this order so that the final types will take precedence
      typeListsToAdjust.concat(finalTypeLists).flatMap(t => t.types),
      t => t.elemID.name,
    )

    // TODO instead regenerate all types and update in-place for instances
    adjustFieldTypes({ definedTypes, defQuery, finalTypeNames })

    return {
      elements: (instances as Element[]).concat(Object.values(definedTypes)),
      errors: allResults.flatMap(t => t.errors ?? []),
    }
  }
  return {
    pushEntries,
    generate,
  }
}

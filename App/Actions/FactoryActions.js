//dummy
import { FACTORIES } from '../Services/MockFactories'

export const GET_FACTORIES = 'GET_FACTORIES'

export function getFactories() {
  return {
    type: GET_FACTORIES,
    payload: FACTORIES
  }
}

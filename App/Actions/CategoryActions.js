// dummy
import { CATEGORIES } from '../Services/MockCategories'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export function getCategories () {
  return {
    type: GET_CATEGORIES,
    payload: CATEGORIES
  }
}

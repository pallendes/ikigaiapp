import { GET_CATEGORIES } from '../Actions/CategoryActions'

const initialState = {
  categories: []
}

export function categoryReducer (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state
  }
}

import { INIT_USER_CREATION, USER_CREATED, USER_CREATION_FAILED } from '../Actions/UserActions'

const initialState = {
  isProcessing: false,
  error: null
}

export function userReducer (state = initialState, action) {
  switch (action.type) {
    case INIT_USER_CREATION:
      return {
        ...state,
        isProcessing: true,
      }
    case USER_CREATED:
      return {
        ...state,
        isProcessing: false,
      }
    case USER_CREATION_FAILED:
      return {
        ...state,
        isProcessing: false,
        error: action.error,
      }
    default:
      return state
  }
}

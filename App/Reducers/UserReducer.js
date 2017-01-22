import { INIT_USER_CREATION,
  USER_CREATED,
  USER_CREATION_FAILED,
  MODIFY_USER_DATA,
  PERSIST_USER,
  DELETE_USER } from '../Actions/UserActions'

const initialState = {
  isProcessing: false,
  error: null,
  user: null
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
        user: action.payload,
      }
    case USER_CREATION_FAILED:
      return {
        ...state,
        isProcessing: false,
        error: action.error,
      }
    case DELETE_USER:
      return {
        ...state,
        user: userModel
      }
    case MODIFY_USER_DATA:
      return {
        ...state,
        user: action.payload,
      }
    case PERSIST_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

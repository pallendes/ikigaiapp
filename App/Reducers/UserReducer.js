import { INIT_USER_CREATION,
  USER_CREATED,
  USER_CREATION_FAILED,
  MODIFY_USER_DATA,
  PERSIST_USER,
  LOGOUT_CURRENT_USER,
  DELETE_USER,
  REGISTER_LOGGED_USER } from '../Actions/UserActions'
import userModel from '../Models/UserModel'

const initialState = {
  isProcessing: false,
  error: null,
  users: [],
  currentUser: null
}

export function userReducer (state = initialState, action) {
  switch (action.type) {
    case INIT_USER_CREATION:
      return {
        ...state,
        isProcessing: true
      }
    case USER_CREATED:
      return {
        ...state,
        isProcessing: false,
        currentUser: action.payload.currentUser,
        users: action.payload.users
      }
    case USER_CREATION_FAILED:
      return {
        ...state,
        isProcessing: false,
        error: action.error
      }
    case DELETE_USER:
      return {
        ...state,
        user: Object.assign({}, userModel)
      }
    case MODIFY_USER_DATA:
      return {
        ...state,
        user: action.payload
      }
    case PERSIST_USER:
      return {
        ...state,
        user: action.payload
      }
    case LOGOUT_CURRENT_USER:
      return {
        ...state,
        currentUser: null
      }
    case REGISTER_LOGGED_USER: {
      return {
        ...state,
        currentUser: action.payload
      }
    }
    default:
      return state
  }
}

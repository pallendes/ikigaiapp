import { INIT_AUTH, LOGIN_SUCCESS, LOGIN_ERROR } from '../Actions/LoginActions'

const initialState = {
  authenticated: false,
  user: null,
  errorMessage: null,
  isProcessing: false
}

export function authReducer (state = initialState, action) {
  switch (action.type) {
    case INIT_AUTH:
      return {
        ...state,
        isProcessing: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        errorMessage: null,
        isProcessing: false,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        errorMessage: action.payload,
        isProcessing: false, 
      }
    default:
      return state
  }
}

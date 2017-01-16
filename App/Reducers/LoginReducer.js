import { INIT_AUTH, LOGIN_SUCCESS, LOGIN_ERROR } from '../Actions/LoginActions'

const initialState = {
  authenticated: false,
  user: null,
  errorMessage: null
}

export function authReducer (state = initialState, action) {
  switch (type) {
    case INIT_AUTH:
      return state
      break;
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        errorMessage: null,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

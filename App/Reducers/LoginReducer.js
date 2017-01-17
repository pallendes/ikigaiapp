import { INIT_AUTH,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  INIT_LOGOUT,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS
} from '../Actions/LoginActions'

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
    case INIT_LOGOUT:
      return {
        ...state,
        isProcessing: true,
      }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isProcessing: false,
        authenticated: false,
      }
    }
    case LOGOUT_ERROR:
      return {
        ...state,
        isProcessing: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

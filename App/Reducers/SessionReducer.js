import {
  INIT_SESSION_CREATION,
  SESSION_CREATED,
  SESSION_CREATION_FAILED,
  DESTROY_CURRENT_SESSION,
  REGISTER_CURRENT_SESSION
} from '../Actions/SessionActions'

const initialState = {
  isProcessing: false,
  sessions: [],
  currentSession: null,
  err: null
}

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SESSION_CREATION:
      return {
        ...state,
        isProcessing: true,
        err: null
      }
    case SESSION_CREATED:
      return {
        ...state,
        sessions: action.payload.sessions,
        currentSession: action.payload.currentSession,
        isProcessing: false,
        err: null
      }
    case SESSION_CREATION_FAILED:
      return {
        ...state,
        isProcessing: false,
        err: action.payload
      }
    case DESTROY_CURRENT_SESSION:
      return {
        ...state,
        isProcessing: false,
        currentSession: null
      }
    case REGISTER_CURRENT_SESSION: {
      return {
        ...state,
        currentSession: action.payload
      }
    }
    default:
      return state
  }
}

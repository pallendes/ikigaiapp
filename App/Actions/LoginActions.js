import { firebaseAuth, firebaseDb, firebaseEnabled } from '../Config/firebase'
import { destroyCurrentSession } from './SessionActions'
import { logoutCurrentUser } from './UserActions'

export const INIT_AUTH = 'INIT_AUTH'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const INIT_LOGOUT = 'INIT_LOGOUT'
export const LOGOUT_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGIN_SUCCESS'

export function initAuth() {
  return {
    type: INIT_AUTH
  }
}

export function initLogOut() {
  return {
    type: INIT_LOGOUT
  }
}

export function authenticate(email, passwd) {
    return dispatch => {
      dispatch(initAuth())
      return firebaseAuth.signInWithEmailAndPassword(email, passwd)
        .then(result => {
          dispatch(signInSuccess(result))
        })
        .catch(err => {
          console.log('authenticate error: ', err)
          dispatch(signInError(err))
        })
    }
}

export const logOut = () => (dispatch, getState) => {
  if(!firebaseEnabled) {
    localLogOut(dispatch, getState)
  } else {
    return firebaseLogOut(dispatch)
  }
}

const localLogOut = (dispatch, getState) => {

  const { currentSession } = getState().session
  const { currentUser } = getState().user

  dispatch(destroyCurrentSession())
  dispatch(logoutCurrentUser())

}

const firebaseLogOut = dispatch => {
  dispatch(initLogOut())
  return firebaseAuth.signOut()
    .then(result => dispatch(logOutSuccess()))
    .catch(err => dispatch(logOutError(err)))
}

export function signInSuccess(result) {
  return {
    type: LOGIN_SUCCESS,
    payload: result.user
  }
}

export function signInError(err) {
  return {
    type: LOGIN_ERROR,
    payload: err.message
  }
}

export function logOutSuccess(result) {
  return {
    type: LOGOUT_SUCCESS,
    payload: result
  }
}

export function logOutError(err) {
  return {
    type: LOGOUT_ERROR,
    payload: err.message
  }
}

import { firebaseAuth, firebaseDb, firebaseEnabled } from '../Config/firebase'
import { destroyCurrentSession, registerCurrentSession } from './SessionActions'
import { logoutCurrentUser, registerLoggedUser } from './UserActions'

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

export const authenticate = (email, passwd) => (dispatch, getState) => {

    if(firebaseEnabled) {
      dispatch(initAuth())
      return firebaseAuth.signInWithEmailAndPassword(email, passwd)
        .then(result => {
          dispatch(signInSuccess(result.user))
        })
        .catch(err => {
          console.log('authenticate error: ', err)
          dispatch(signInError(err.message))
        })
  } else {

    let { users } = getState().user
    let user = users.find(_user => _user.email === email)

    let { sessions } = getState().session
    let currentSession = sessions.find(_session => _session.userId === email)

    if(user) {
      if(user.passwd !== passwd)
        dispatch(signInError('Invalid password for the user ' + user.email))
      else {
        dispatch(signInSuccess(user))
        dispatch(registerLoggedUser(user))
        dispatch(registerCurrentSession(currentSession))
      }
    } else
      dispatch(signInError('Invalid username or password'))

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

export function signInSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}

export function signInError(err) {
  return {
    type: LOGIN_ERROR,
    payload: err
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

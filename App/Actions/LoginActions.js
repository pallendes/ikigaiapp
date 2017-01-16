import { firebaseAuth } from '../Config/firebase'

export const INIT_AUTH = 'INIT_AUTH'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export function initAuth() {
  return {
    type: INIT_AUTH
  }
}

export function authenticate(email, passwd) {
    return dispatch => {
      dispatch(initAuth())
      return firebaseAuth.signInWithEmailAndPassword(email, passwd)
          .then(result => dispatch(signInSuccess(result)))
          .catch(err => dispatch(signInError(err)))
    }
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

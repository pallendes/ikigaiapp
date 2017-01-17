import { firebaseAuth, firebaseDb } from '../Config/firebase'

export const INIT_USER_CREATION = 'INIT_USER_CREATION'
export const USER_CREATED = 'USER_CREATED'
export const USER_CREATION_FAILED = 'USER_CREATION_FAILED'

export function initRegistration() {
  return {
    type: INIT_USER_CREATION
  }
}

export function userCreated(result) {
  return {
    type: USER_CREATED,
    payload: result
  }
}

export function userCreationFailed(err) {
  return {
    type: USER_CREATION_FAILED,
    error: err
  }
}

// export function createUser (user) {
//   return dispatch => {
//     dispatch(initRegistration())
//     return firebaseAuth.createUserWithEmailAndPassword(user.email, user.passwd)
//       .then(user => {
//         let userId = firebaseDb.ref().child('users').push().key
//         let userUpdate = {}
//         userUpdate['/users/' + userId] = user
//         return firebaseDb.ref().update(userUpdate)
//       })
//       .then(result => dispatch(userCreated()))
//       .catch(error => dispatch(userCreationFailed(error)))
//   }
// }

export function createUser (user) {
  return dispatch => {
    dispatch(initRegistration())
    let userId = firebaseDb.ref().child('users').push().key
    let userUpdate = {}
    userUpdate['/users/' + userId] = user
    return firebaseDb.ref().update(userUpdate)
      .then(() => dispatch(userCreated(result)))
      .catch(error => dispatch(userCreationFailed(error)))
  }
}

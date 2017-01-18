import { firebaseAuth, firebaseDb, firebaseStorage } from '../Config/firebase'

export const INIT_USER_CREATION = 'INIT_USER_CREATION'
export const USER_CREATED = 'USER_CREATED'
export const USER_CREATION_FAILED = 'USER_CREATION_FAILED'

export function initRegistration() {
  return {
    type: INIT_USER_CREATION
  }
}

export function userCreated(user) {
  return {
    type: USER_CREATED,
    payload: user
  }
}

export function userCreationFailed(err) {
  return {
    type: USER_CREATION_FAILED,
    error: err
  }
}

export function createUser (user) {
  return dispatch => {
    dispatch(initRegistration())
    dispatch(userCreated(user)) // local
    return user; // local
    // return firebaseAuth.createUserWithEmailAndPassword(user.email, user.passwd)
    //   .then(() => {
    //     let userRef = firebaseDb.ref().child('users/' + firebaseAuth.currentUser.uid)
    //     return userRef.set({
    //       name: user.name,
    //       lastName: user.lastName,
    //       email: user.email
    //     })
    //   })
      // .then(() => {
      //   let storageRef = firebaseStorage.ref().child('users/' + firebaseAuth.currentUser.uid)
      //
      // })
      // .then(result => dispatch(userCreated(user)))
      // .catch(error => dispatch(userCreationFailed(error)))
  }
}

export function updateUser (user) {
  return dispatch => {
    dispatch(initRegistration())
    let userRef = firebaseDb.ref().child('users/' + firebaseAuth.currentUser.uid)
    return userRef.set({
      name: user.name,
      lastName: user.lastName
    })
    .then(() => dispatch(userCreated(result)))
    .catch(error => dispatch(userCreationFailed(error)))
  }
}

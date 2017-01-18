import { firebaseAuth, firebaseDb, firebaseStorage, firebaseEnabled } from '../Config/firebase'

export const INIT_USER_CREATION = 'INIT_USER_CREATION'
export const USER_CREATED = 'USER_CREATED'
export const USER_CREATION_FAILED = 'USER_CREATION_FAILED'
export const MODIFY_USER_DATA = 'MODIFY_USER_DATA'
export const PERSIST_USER = 'PERSIST_USER'

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
  if (firebaseEnabled) {
    return persistToFirebase(user);
  } else {
    return dispatch => {
      dispatch(userCreated(user)) // local
      return user
    }
  }
}

export function persistUser(user) {
  if (firebaseEnabled) {
    return {
      action: persistUser,
      payload: user
    }
  } else {
    return updateUserToFirebase(user);
  }
}

export function modifyUserData(user) {
  return {
    action: MODIFY_USER_DATA,
    payload: user
  }
}

export function updateUserToFirebase(user) {
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

function persistToFirebase (user) {
  return dispatch => {
    dispatch(initRegistration())
    return firebaseAuth.createUserWithEmailAndPassword(user.email, user.passwd)
      .then(() => {
        let userRef = firebaseDb.ref().child('users/' + firebaseAuth.currentUser.uid)
        return userRef.set({
          name: user.name,
          lastName: user.lastName,
          email: user.email
        })
      })
      .then(() => {
        dispatch(userCreated(user))
        //@TODO
        //persist profile pic to firebase storage
        // let storageRef = firebaseStorage.ref().child('users/' + firebaseAuth.currentUser.uid)
      })
      .then(result => dispatch(userCreated(user)))
      .catch(error => dispatch(userCreationFailed(error)))
  }
}

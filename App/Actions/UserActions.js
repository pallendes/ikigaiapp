import { firebaseAuth, firebaseDb, firebaseStorage, firebaseEnabled } from '../Config/firebase'
import { createSession } from './SessionActions'

export const INIT_USER_CREATION = 'INIT_USER_CREATION'
export const USER_CREATED = 'USER_CREATED'
export const USER_CREATION_FAILED = 'USER_CREATION_FAILED'
export const MODIFY_USER_DATA = 'MODIFY_USER_DATA'
export const PERSIST_USER = 'PERSIST_USER'
export const DELETE_USER = 'DELETE_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const REGISTER_LOGGED_USER = 'REGISTER_LOGGED_USER'

export const initRegistration = () => {
  return {
    type: INIT_USER_CREATION
  }
}

export const userCreated = (user) => {
  return {
    type: USER_CREATED,
    payload: user
  }
}

export const userCreationFailed = (err) => {
  return {
    type: USER_CREATION_FAILED,
    error: err
  }
}

export const registerLoggedUser = (user) => {
  return {
    type: REGISTER_LOGGED_USER,
    payload: user
  }
}

export const createUser = (user) => {
  if (firebaseEnabled) {
    return persistToFirebase(user);
  } else {
    return (dispatch, getState) => {
      const { users } = getState().user
      //verify user session already exists
      const userExists = users.find(_user => _user.email === user.email)

      if(userExists) {
        dispatch(userCreationFailed('User \'' + user.email + '\' already registered'))
      }

      const newUser = Object.assign({}, user)

      users.push(newUser)

      dispatch(userCreated({currentUser: user, users})) // local

    }
  }
}

//@TODO add firebase support
export const deleteUser = (user) => {
  if(firebaseEnabled) {
    return {
      type: DELETE_USER
    }
  }
}

export const persistUser = (user) => {
  if (firebaseEnabled) {
    return {
      type: persistUser,
      payload: user
    }
  } else {
    return updateUserToFirebase(user);
  }
}

export const modifyUserData = (user) => {
  return {
    type: MODIFY_USER_DATA,
    payload: user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const updateUserToFirebase = (user) => {
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

export const persistToFirebase = (user) => {
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

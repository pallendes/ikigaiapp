export const CREATE_SESSION = 'CREATE_SESSION'
export const INIT_SESSION_CREATION = 'INIT_SESSION_CREATION'
export const SESSION_CREATED = 'SESSION_CREATED'
export const SESSION_CREATION_FAILED = 'SESSION_CREATION_FAILED'
export const DESTROY_CURRENT_SESSION = 'DESTROY_CURRENT_SESSION'

export const createSession = (user) => (dispatch, getState) => {
  dispatch(initSessionCreation())

  const { sessions } = getState().session
  //verify if user session already exists
  let userSession = sessions.find(_session => _session.userId === user.email)

  if(userSession) {
    dispatch(sessionCreationFailed('A session already exists for the user ' + user.email))
    return user
  }

  userSession = {
    id: user.email.toUpperCase() + (+new Date()),
    userId: user.email,
    date: +new Date()
  }

  sessions.push(userSession)

  dispatch(sessionCreated({currentSession: userSession, sessions}))

}

export const destroyCurrentSession = () => {
  return {
    type: DESTROY_CURRENT_SESSION
  }
}

export const initSessionCreation = () => {
  return {
    type: INIT_SESSION_CREATION
  }
}

export const sessionCreated = (payload) => {
  return {
    type: SESSION_CREATED,
    payload: payload
  }
}

export const sessionCreationFailed = (err) => {
  return {
    type: SESSION_CREATION_FAILED,
    payload: err
  }
}

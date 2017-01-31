export const CREATE_SESSION = 'CREATE_SESSION'
export const INIT_SESSION_CREATION = 'INIT_SESSION_CREATION'
export const SESSION_CREATED = 'SESSION_CREATED'
export const SESSION_CREATION_FAILED = 'SESSION_CREATION_FAILED'
export const DESTROY_CURRENT_SESSION = 'DESTROY_CURRENT_SESSION'
export const REGISTER_CURRENT_SESSION = 'REGISTER_CURRENT_SESSION'

export const createSession = (user) => (dispatch, getState) => {
  dispatch(initSessionCreation())

  const { sessions } = getState().session
  //verify if user session already exists
  const userSession = sessions.find(_session => _session.userId === user.email)

  if(userSession) {
    dispatch(sessionCreationFailed('A session already exists for the user ' + user.email))
  }

  const newSession = {
    id: user.email.toUpperCase() + (+new Date()),
    userId: user.email,
    date: +new Date()
  }

  sessions.push(newSession)

  dispatch(sessionCreated({currentSession: newSession, sessions}))

}

export const registerCurrentSession = (currentSession) => {
  return {
    type: REGISTER_CURRENT_SESSION,
    payload: currentSession
  }
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

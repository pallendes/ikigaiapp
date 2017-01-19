import { GET_FACTORIES } from '../Actions/FactoryActions'

const initialState = {
  factories: []
}

export function factoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FACTORIES:
      return {
        ...state,
        factories: action.payload
      }
    default:
      return state
  }
}

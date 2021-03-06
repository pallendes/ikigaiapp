import { OPEN_DRAWER, CLOSE_DRAWER } from '../Actions/DrawerActions'

const initialState = {
  drawerState: 'closed'
}

export const toggleDrawer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        drawerState: 'opened'
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        drawerState: 'closed'
      }
    default:
      return state
  }
}

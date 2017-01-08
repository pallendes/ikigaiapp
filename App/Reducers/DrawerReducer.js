import { OPEN_DRAWER, CLOSE_DRAWER } from '../Actions/DrawerActions'

const initialState = {
  drawerState: 'opened'
}

export const toggleDrawer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        drawerState: 'opened',
      }
      break;
    case CLOSE_DRAWER:
      return {
        ...state,
        drawerState: 'closed',
      }
      break;
    default:
      return state
  }
}

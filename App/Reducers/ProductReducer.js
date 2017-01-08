import { SHOW_PRODUCTS } from '../Actions/ProductActions'

const initialState = {
  productList: []
}

export const showProducts = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        productList : action.payload,
      }
      break;
    default:
      return state;
  }
}

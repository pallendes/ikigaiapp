import { SHOW_PRODUCTS, PERSIST_PRODUCT } from '../Actions/ProductActions'

const initialState = {
  productList: []
}

export const showProducts = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      }
    case PERSIST_PRODUCT:
      return {
        ...state,
        productList: action.payload,
      }
    default:
      return state
  }
}

import { SHOW_PRODUCT_DETAIL } from '../Actions/ProductDetailActions'

const initialState = {
  product: {}
}

export const showProductDetail = (state = initialState, action) => {
  switch(action.type) {
      case SHOW_PRODUCT_DETAIL:
        return {
          ...state,
          product: action.payload,
        }
        break;
      default:
        return state;
  }
}

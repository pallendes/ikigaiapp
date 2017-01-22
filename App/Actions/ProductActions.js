//dummy data
import { PRODUCTS } from '../Services/MockProducts';

export const SHOW_PRODUCTS = 'SHOW_PRODUCTS'
export const PERSIST_PRODUCT = 'PERSIST_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export function showProducts() {
  return {
    type: SHOW_PRODUCTS,
    payload: PRODUCTS
  }
}

//@TODO add firebase support verify a better way to do this
export function deleteProduct(productList) {
  return {
    type: DELETE_PRODUCT,
    payload: productList
  }
}

//@TODO add firebase support
export function persistProduct(productList) {
  return {
    type: PERSIST_PRODUCT,
    payload: productList
  }
}

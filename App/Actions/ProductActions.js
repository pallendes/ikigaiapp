//dummy data
import { PRODUCTS } from '../Services/MockProducts';

export const SHOW_PRODUCTS = 'SHOW_PRODUCTS'
export const PERSIST_PRODUCT = 'PERSIST_PRODUCT'

export function showProducts() {
  return {
    type: SHOW_PRODUCTS,
    payload: PRODUCTS
  }
}

//@TODO add firebase support
export function persistProduct(product, productList) {
  return {
    type: PERSIST_PRODUCT,
    payload: productList.push(product)
  }
}

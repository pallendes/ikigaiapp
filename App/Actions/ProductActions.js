//dummy data
import { PRODUCTS } from '../Services/MockProducts';

export const SHOW_PRODUCTS = 'SHOW_PRODUCTS';

export function showProducts() {
  return {
    type: SHOW_PRODUCTS,
    payload: PRODUCTS
  }
}

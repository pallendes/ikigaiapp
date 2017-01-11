//dummy data
import { PRODUCTS } from '../Services/MockProducts'

export const SHOW_PRODUCT_DETAIL = 'SHOW_PRODUCT_DETAIL'

export function showProductDetail(index) {

    return {
        type: SHOW_PRODUCT_DETAIL,
        payload: PRODUCTS[index]
    }
}

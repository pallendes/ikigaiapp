export const SHOW_PRODUCTS = 'SHOW_PRODUCTS'
export const PERSIST_PRODUCT = 'PERSIST_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const BEGIN_LOADING = 'BEGIN_LOADING'

// @TODO add firebase support
export const loadProducts = () => (dispatch, getState) => {
  // dispatch(beginLoading())
  //
  // const { currentUser } = getState().user
  // const { currentSession } = getState().session
  // const { productList } = getState().products
  //
  // //get all products for the session
  // let products = productList.filter(_product => _product.sessionId === currentSession.id)

  dispatch(showProducts(getState().products.productList))
}

export const beginLoading = () => {
  return {
    type: BEGIN_LOADING
  }
}

export function showProducts (products = []) {
  return {
    type: SHOW_PRODUCTS,
    payload: products
  }
}

// @TODO add firebase support verify a better way to do this
export function deleteProduct (productList) {
  return {
    type: DELETE_PRODUCT,
    payload: productList
  }
}

// @TODO add firebase support
export function persistProduct (productList) {
  return {
    type: PERSIST_PRODUCT,
    payload: productList
  }
}

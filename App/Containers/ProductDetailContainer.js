import { connect } from 'react-redux'
import React, { Component } from 'react'
import ProductDetail from '../Components/ProductDetail'
import { showProductDetail } from '../Actions/ProductDetailActions'

class ProductDetailContainer extends Component {
  render () {
    return (
      <ProductDetail />
    )
  }
}

mapDispatchToProps = ({
  showProductDetail: showProductDetail
})

mapStateToProps = state => ({
  product: state.showProductDetail
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer)

import { connect } from 'react-redux'
import React, { Component } from 'react'
import ProductDetail from '../Components/ProductDetail'
import { showProductDetail } from '../Actions/ProductDetailActions'
import navigateTo from '../Actions/SideBarNav'

class ProductDetailContainer extends Component {

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  render () {

    const product = { product: this.props.selectedProduct }

    return (
      <ProductDetail goBack={this.goBack} {...product}/>
    )
  }
}

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  showProductDetail,
})

mapStateToProps = state => ({
  // product: state.product
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer)

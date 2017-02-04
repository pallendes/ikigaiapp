import { connect } from 'react-redux'
import React, { Component } from 'react'
import ProductDetail from '../Components/ProductDetail'
import { showProductDetail } from '../Actions/ProductDetailActions'
import { deleteProduct } from '../Actions/ProductActions'
import navigateTo from '../Actions/SideBarNav'
import { Alert, ToastAndroid } from 'react-native'

class ProductDetailContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      fabActive: false
    }
  }

  confirmDeleteProduct = (product) => {
    Alert.alert(
      'Delete product',
      'Are you sure you want to delete product ' + product.name,
      [
        {
          text: 'Yes', onPress: () => this.deleteProduct(product)
        },
        {
          text: 'No', onPress: () => console.log('no pressed')
        }
      ]
    )
  }

  editProduct = (product) => {
    this.props.navigateTo('newProductContainer', 'productsContainer', {selectedProduct: product})
  }

  deleteProduct = (product) => {
    let productIndex = this.props.products.findIndex(_product => _product.id === product.id)
    let prevLength = this.props.products.length

    if (productIndex > -1) {
      const products = [...this.props.products.slice(0, productIndex),
        ...this.props.products.slice(productIndex + 1)]
      this.props.deleteProduct(products)
    }

    if (prevLength > this.props.products.length) {
      ToastAndroid.show('Product deleted succesfully!', ToastAndroid.SHORT)
      this.goBack()
    } else {
      ToastAndroid.show('Error ocurred while trying to delete product', ToastAndroid.SHORT)
    }
  }

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  showFab = () => {
    this.setState({
      fabActive: !this.state.fabActive
    })
  }

  render () {
    const product = { product: this.props.selectedProduct }

    return (
      <ProductDetail
        goBack={this.goBack}
        fabActive={this.state.fabActive}
        showFab={this.showFab}
        editProduct={this.editProduct}
        confirmDeleteProduct={this.confirmDeleteProduct}
        {...product} />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute, passProps) => dispatch(navigateTo(route, homeRoute, passProps)),
  deleteProduct: (products) => dispatch(deleteProduct(products)),
  showProductDetail
})

const mapStateToProps = state => ({
  products: state.products.productList
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer)

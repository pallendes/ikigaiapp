import React, { Component } from 'react'
import ProductImages from '../Components/ProductImages'
import { connect } from 'react-redux'
import { persistProduct } from '../Actions/ProductActions'
import { Platform, ToastAndroid } from 'react-native'
import { navigateTo } from '../Actions/SideBarNav'

class ProductImagesContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      pictures: []
    }
  }

  componentWillMount = () => {
    let pictures = []

    this.props.product.pictures.forEach(picture => {
      pictures.push({
        uri: picture,
        selected: false
      })
    })

    this.setState({
      pictures: pictures
    })
  }

  selectPicture = (index) => {
    let { pictures } = this.state
    pictures[index].selected = !pictures[index].selected
    this.setState({
      pictures: pictures
    })
  }

  deleteSelectedPictures = async () => {
    const pictures = this.state.pictures.filter(picture => picture.selected).map(picture => picture.uri)
    const product = {
      ...this.props.product,
      pictures: pictures
    }
    const productIndex = this.props.products.findIndex(_product => _product.id === product.id)
    await this.props.persistProduct([
      ...this.props.products.slice(0, productIndex),
      product,
      ...this.props.products.slice(productIndex + 1)
    ])

    if (Platform.OS === 'Android') {
      ToastAndroid.show('Images deleted', ToastAndroid.SHORT)
    }

    this.props.navigateTo('newProductContainer', 'productsContainer', {selectedProduct: product})
  }

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  render () {
    return (
      <ProductImages
        pictures={this.state.pictures}
        selectPicture={this.selectPicture}
        deleteSelectedPictures={this.deleteSelectedPictures}
        goBack={this.goBack} />
    )
  }

}

const mapStateToProps = state => ({
  products: state.products.productList
})

const mapDispatchToProps = dispatch => ({
  navigateTo: (route, homeRoute, passProps) => dispatch(navigateTo(route, homeRoute, passProps)),
  persistProduct: (product) => dispatch(persistProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductImagesContainer)

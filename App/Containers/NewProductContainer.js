import React, { Component } from 'react'
import NewProduct from '../Components/NewProduct'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import { launchCamera, pictureTaken, closeCamera } from '../Actions/CameraActions'
import ImagePicker from 'react-native-image-crop-picker'
import { List, ListItem, Text } from 'native-base'
import { getCategories } from '../Actions/CategoryActions'
import ProductModel, { ProductModelValidation, ProductValidators } from '../Models/ProductModel'
import { getFactories } from '../Actions/FactoryActions'
import { persistProduct } from '../Actions/ProductActions'
import { ToastAndroid } from 'react-native'
import { validate, validateAll } from '../Models/ValidateModel'

class NewProductContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      product: ProductModel,
      productValidation: ProductModelValidation
    }
  }

  componentWillMount = () => {
    this.props.getCategories()
    this.props.getFactories()
  }

  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  handleNewPicture = (from) => {
    this.closeModal()
    if (from === 'camera') {
      ImagePicker.openCamera({
        width: 300,
        height: 400
      }).then(image => {
        let product = this.state.product
        product.pictures.push(image.path)
        this.setState({
          product: product
        })
      });
    } else {
      ImagePicker.openPicker({})
        .then(image => {
          let product = this.state.product
          product.pictures.push(image.path)
          this.setState({
            product: product
          })
        });
    }
  }

  setProductProps = (value, prop) => {

    let { product, productValidation } = this.state

    if(ProductValidators[prop])
      productValidation[prop] = validate(ProductValidators[prop], value)

    product[prop] = value

    this.setState({
      product: product,
      productValidation: productValidation
    })

  }

  saveProduct = () => {

    let prevLength = this.props.products.length
    let product = this.state.product
    product.id = prevLength > 0 ? this.props.products[this.props.products.length - 1].id + 1 : 0
    product.sessionId = this.props.session.currentSession.id

    let products = this.props.products
    products.push(product)

    this.props.persistProduct(products)

    //@TODO mejorar esto
    if(this.props.products.length > prevLength) {
      this.props.navigateTo('productsContainer', 'productsContainer')
      ToastAndroid.show('Your peoduct was created succesfully!', ToastAndroid.SHORT)
    }

  }

  openModal = () => {
    this.setState({
      modalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  }

  openDrawer = () => {
    this.props.openDrawer()
  }

  render() {
    return (
      <NewProduct
        goBack={this.goBack}
        handleNewPicture={this.handleNewPicture}
        pictureUri={this.props.pictureUri}
        openModal={this.openModal}
        closeModal={this.closeModal}
        modalOpen={this.state.modalOpen}
        saveProduct={this.saveProduct.bind(this)}
        setProductProps={this.setProductProps}
        product={this.state.product}
        openDrawer={this.openDrawer}
        product={this.state.product}
        productValidation={this.state.productValidation}
        {...this.props} />
    )
  }
}

mapStateToProps = state => ({
  cameraState: state.camera.cameraState,
  pictureUri: state.camera.pictureUri,
  categories: state.categories.categories,
  factories: state.factories.factories,
  products: state.products.productList,
  session: state.session
})

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  launchCamera: () => dispatch(launchCamera()),
  pictureTaken: (pictureUri) => dispatch(pictureTaken(pictureUri)),
  closeCamera: () => dispatch(closeCamera()),
  getCategories: () => dispatch(getCategories()),
  getFactories: () => dispatch(getFactories()),
  persistProduct: (product) => dispatch(persistProduct(product)),
  openDrawer: () => dispatch(openDrawer())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProductContainer)

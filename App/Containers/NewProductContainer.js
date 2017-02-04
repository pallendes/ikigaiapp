import React, { Component } from 'react'
import NewProduct from '../Components/NewProduct'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import { launchCamera, pictureTaken, closeCamera } from '../Actions/CameraActions'
import { openDrawer } from '../Actions/DrawerActions'
import ImagePicker from 'react-native-image-crop-picker'
import { getCategories } from '../Actions/CategoryActions'
import ProductModel, { ProductModelValidation, ProductValidators } from '../Models/ProductModel'
import { getFactories } from '../Actions/FactoryActions'
import { persistProduct } from '../Actions/ProductActions'
import { ToastAndroid } from 'react-native'
import { validate, validateAll } from '../Models/ValidateModel'

class NewProductContainer extends Component {

  constructor (props) {
    super(props)

    let _productModel = null
    let isNewProduct = true

    if (props.selectedProduct) {
      _productModel = Object.assign({}, props.selectedProduct)
      _productModel.pictures = props.selectedProduct.pictures.slice() // array copy
      isNewProduct = false
    } else {
      // temporal fix
      _productModel = Object.assign({}, ProductModel)
      _productModel.pictures = []
    }

    this.state = {
      modalOpen: false,
      product: _productModel,
      productValidation: Object.assign({}, ProductModelValidation),
      isNewProduct: isNewProduct
    }
  }

  componentWillMount = () => {
    this.props.getCategories()
    this.props.getFactories()
  }

  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps)
  }

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  editImages = (product) => {
    this.props.navigateTo('productImagesContainer', 'productsContainer', {product: product})
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
      }, (err) => {
        console.error(err)
      })
    } else {
      ImagePicker.openPicker({})
        .then(image => {
          let product = Object.assign({}, this.state.product)
          product.pictures.push(image.path)
          this.setState({
            product: product
          })
        }, (err) => {
          console.error(err)
        })
    }
  }

  setProductProps = (value, prop) => {
    let { product, productValidation } = this.state

    if (ProductValidators[prop]) {
      productValidation[prop] = validate(ProductValidators[prop], value)
    }

    product[prop] = value

    this.setState({
      product: product,
      productValidation: productValidation
    })
  }

  saveProduct = async () => {
    let prevLength = this.props.products.length
    let product = this.copyProduct()

    if (!validateAll(ProductValidators, product).valid) {
      ToastAndroid.show('You have to complete the form correctly before save!', ToastAndroid.SHORT)
      return
    }

    product.id = prevLength > 0 ? this.props.products[this.props.products.length - 1].id + 1 : 0
    product.sessionId = this.props.session.currentSession.id

    // temporal fix
    if (!product.factory.id) {
      product.factory = Object.assign({}, this.props.factories[0])
    }

    // temporal fix
    if (!product.category.id) {
      product.category = Object.assign({}, this.props.categories[0])
    }

    const products = this.props.products.concat(product)

    await this.props.persistProduct(products)

    // @TODO mejorar esto
    if (this.props.products.length > prevLength) {
      this.props.navigateTo('productsContainer', 'productsContainer')
      ToastAndroid.show('Your peoduct was created succesfully!', ToastAndroid.SHORT)
    }
  }

  saveChanges = () => {
    const product = this.copyProduct()
    const productIndex = this.props.products.findIndex(_product => _product.id === product.id)

    const products = [
      ...this.props.products.slice(0, productIndex),
      product,
      ...this.props.products.slice(productIndex + 1)
    ]

    this.props.persistProduct(products)

    this.props.navigateTo('productsContainer', 'productsContainer')
    ToastAndroid.show('Your peoduct was modified succesfully!', ToastAndroid.SHORT)
  }

  copyProduct = () => {
    let product = Object.assign({}, this.state.product)
    product.pictures = this.state.product.pictures.slice()
    product.category = Object.assign({}, this.state.product.category)
    product.factory = Object.assign({}, this.state.product.factory)
    return product
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

  render () {
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
        editImages={this.editImages}
        isNewProduct={this.state.isNewProduct}
        saveChanges={this.saveChanges}
        productValidation={this.state.productValidation}
        {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  cameraState: state.camera.cameraState,
  pictureUri: state.camera.pictureUri,
  categories: state.categories.categories,
  factories: state.factories.factories,
  products: state.products.productList,
  session: state.session
})

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute, passProps) => dispatch(navigateTo(route, homeRoute, passProps)),
  launchCamera: () => dispatch(launchCamera()),
  pictureTaken: (pictureUri) => dispatch(pictureTaken(pictureUri)),
  closeCamera: () => dispatch(closeCamera()),
  getCategories: () => dispatch(getCategories()),
  getFactories: () => dispatch(getFactories()),
  persistProduct: (product) => dispatch(persistProduct(product)),
  openDrawer: () => dispatch(openDrawer())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProductContainer)

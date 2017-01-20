import React, { Component } from 'react'
import NewProduct from '../Components/NewProduct'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import { launchCamera, pictureTaken, closeCamera } from '../Actions/CameraActions'
import _Camera from '../Components/_Camera'
import ImagePicker from 'react-native-image-crop-picker'
import { List, ListItem, Text } from 'native-base'
import { getCategories } from '../Actions/CategoryActions'
import ProductModel from '../Models/ProductModel'
import { getFactories } from '../Actions/FactoryActions'
import { persistProduct } from '../Actions/ProductActions'
import { ToastAndroid } from 'react-native'

class NewProductContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      product: ProductModel
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

  //@TODO remover?
  takePicture = (camRef) => {
    camRef.capture()
      .then((data) => {
        this.props.closeCamera()
        let product = this.state.product
        product.pictures.push(data.path)
        this.setState({
          product: product
        })
        // this.props.pictureTaken(data.path)
      })
      .catch(err => console.log(err))
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
        // this.props.pictureTaken(image.path)
      });
    } else {
      ImagePicker.openPicker({})
        .then(image => {
          let product = this.state.product
          product.pictures.push(image.path)
          this.setState({
            product: product
          })
          // this.props.pictureTaken(image.path)
        });
    }
  }

  setProductProps = (value, prop) => {
    let product = this.state.product
    product[prop] = value.text
    this.setState({
      product: product
    })
  }

  saveProduct = () => {

    let prevLength = this.props.products.length
    let product = this.state.product
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
})

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  launchCamera: () => dispatch(launchCamera()),
  pictureTaken: (pictureUri) => dispatch(pictureTaken(pictureUri)),
  closeCamera: () => dispatch(closeCamera()),
  getCategories: () => dispatch(getCategories()),
  getFactories: () => dispatch(getFactories()),
  persistProduct: (product) => dispatch(persistProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProductContainer)

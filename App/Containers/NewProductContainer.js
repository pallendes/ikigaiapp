import React, { Component } from 'react'
import NewProduct from '../Components/NewProduct'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import { launchCamera, pictureTaken, closeCamera } from '../Actions/CameraActions'
import _Camera from '../Components/_Camera'
import ImagePicker from 'react-native-image-crop-picker'
import { List, ListItem, Text } from 'native-base'

class NewProductContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  takePicture = (camRef) => {
    camRef.capture()
      .then((data) => {
        console.log(data)
        this.props.closeCamera()
        this.props.pictureTaken(data.path)
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
        this.props.pictureTaken(image.path)
      });
    } else {
      ImagePicker.openPicker({})
        .then(image => {
          this.props.pictureTaken(image.path)
        });
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
        {...this.state} />
    )
  }

}

mapStateToProps = state => ({
  cameraState: state.camera.cameraState,
  pictureUri: state.camera.pictureUri
})

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  launchCamera: () => dispatch(launchCamera()),
  pictureTaken: (pictureUri) => dispatch(pictureTaken(pictureUri)),
  closeCamera: () => dispatch(closeCamera())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProductContainer)

import React, { Component } from 'react'
import NewProduct from '../Components/NewProduct'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import { launchCamera, pictureTaken, closeCamera } from '../Actions/CameraActions'
import _Camera from '../Components/_Camera'

class NewProductContainer extends Component {

  constructor(props) {
    super(props)
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

  handleNewPicture = () => {
    this.props.launchCamera()
  }

  render() {

    if (this.props.cameraState === 'opened') {
      return <_Camera takePicture={this.takePicture}/>
    } else {
      return (
        <NewProduct
          goBack={this.goBack}
          handleNewPicture={this.handleNewPicture}
          pictureUri={this.props.pictureUri}/>
      )
    }

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

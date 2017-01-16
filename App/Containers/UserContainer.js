import React, { Component } from 'react'
import UserRegistry from '../Components/UserRegistry'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import ImagePicker from 'react-native-image-crop-picker'

class UserContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pictureUri: '',
      modalOpen: false
    }
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
        this.setState({pictureUri: image.path})
      });
    } else {
      ImagePicker.openPicker({})
        .then(image => {
          this.setState({pictureUri: image.path})
        });
    }
  }

  openModal = () => {
    this.setState({modalOpen: true})
  }

  closeModal = () => {
    this.setState({modalOpen: false})
  }

  render() {
    return (
      <UserRegistry
        goBack={this.goBack}
        handleNewPicture={this.handleNewPicture}
        openModal={this.openModal}
        closeModal={this.closeModal}
        {...this.state}/>
    )
  }
}

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute))
})

export default connect(null, mapDispatchToProps)(UserContainer)

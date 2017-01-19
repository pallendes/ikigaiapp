import React, { Component } from 'react'
import UserRegistry from '../Components/UserRegistry'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import ImagePicker from 'react-native-image-crop-picker'
import { createUser, modifyUserData } from '../Actions/UserActions'

class UserContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pictureUri: '',
      modalOpen: false
    }
  }

  componentWillMount = () => {
    // if (this.props.userReducer.user) {
    //   this.setState({
    //     user: this.props.userReducer.user
    //   })
    // }
  }

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  createUser = () => {
    let user = this.state.user
    this.props.createUser(user)
  }

  handleNewPicture = (from) => {
    this.closeModal()
    if (from === 'camera') {
      ImagePicker.openCamera({
        width: 300,
        height: 400
      }).then(image => {
        this.setUserProp(image.path, 'pictureUri')
      }).catch(err => console.log(err));
    } else {
      ImagePicker.openPicker({})
        .then(image => {
          this.setUserProp(image.path, 'pictureUri')
        })
        .catch(err => console.log(err))
    }
  }

  openModal = () => {
    this.setState({modalOpen: true})
  }

  closeModal = () => {
    this.setState({modalOpen: false})
  }

  setUserProp = (value, prop) => {
    let user = this.props.userReducer.user
    user[prop] = value.text
    this.props.modifyUserData(user)
  }

  render() {
    return (
      <UserRegistry
        goBack={this.goBack}
        handleNewPicture={this.handleNewPicture}
        openModal={this.openModal}
        closeModal={this.closeModal}
        createUser={this.createUser}
        setUserProp={this.setUserProp}
        showLoader={this.props.userReducer.isProcessing}
        {...this.props.userReducer}/>
    )
  }
}

const mapStateToProps = (state) => ({
  userReducer: state.user
})

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  createUser: (user) => dispatch(createUser(user)),
  modifyUserData: (user) => dispatch(modifyUserData(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

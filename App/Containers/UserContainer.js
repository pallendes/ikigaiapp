import React, { Component } from 'react'
import UserRegistry from '../Components/UserRegistry'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import ImagePicker from 'react-native-image-crop-picker'
import { createUser, modifyUserData } from '../Actions/UserActions'
import UserModel, { UserValidators, validateAll, UserModelValidation, validate } from '../Models/UserModel'
import { ToastAndroid } from 'react-native'
import { createSession } from '../Actions/SessionActions'

class UserContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      user: UserModel,
      userValidation: UserModelValidation
    }
  }

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  createUser = async () => {

    const user = this.state.user

    const validModel = validateAll(UserValidators, user).valid

    if(!validModel) {
      ToastAndroid.show('You have to complete the form correctly before sing up!', ToastAndroid.SHORT)
      return
    }

    //create user session
    await this.props.createSession(user)
    //if session exists means it was created
    if(this.props.session.currentSession) {
      await this.props.createUser(user)
      if(this.props.userReducer.currentUser) {
        ToastAndroid.show('User registered successfully!', ToastAndroid.SHORT)
        this.props.navigateTo('productsContainer', 'userContainer')
      }
    } else {
      ToastAndroid.show(this.props.session.err, ToastAndroid.SHORT)
    }
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

    const {user, userValidation} = this.state

    if(UserValidators[prop])
      userValidation[prop] = validate(UserValidators[prop], value)

    user[prop] = value

    this.setState({
      user: user,
      userValidation: userValidation
    })
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
        modalOpen={this.state.modalOpen}
        userValidation={this.state.userValidation}
        user={this.state.user}/>
    )
  }
}

const mapStateToProps = (state) => ({
  userReducer: state.user,
  session: state.session
})

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  createUser: (user) => dispatch(createUser(user)),
  modifyUserData: (user) => dispatch(modifyUserData(user)),
  createSession: (user) => dispatch(createSession(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

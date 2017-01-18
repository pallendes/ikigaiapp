import React, { Component } from 'react'
import UserRegistry from '../Components/UserRegistry'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import ImagePicker from 'react-native-image-crop-picker'
import { createUser } from '../Actions/UserActions'

class UserContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pictureUri: '',
      modalOpen: false,
      user: {
        name: 'Pablo',
        lastName: 'Allendes',
        email: 'a@a.com',
        passwd: 'pad1235!??',
        pictureUri: null
      }
    }
  }

  componentWillMount = () => {
    if (this.props.userReducer.user) {
      this.setState({
        user: this.props.userReducer.user
      })
    }
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
        let user = this.state.user
        user.pictureUri = image.path
        this.setState({user: user})
        this.setState({pictureUri: image.path})
      }).catch(err => console.log(err));
    } else {
      ImagePicker.openPicker({})
        .then(image => {
          let user = this.state.user
          user.pictureUri = image.path
          this.setState({user: user})
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

  setUserProp = (value, prop) => {
    let user = this.state.user
    user[prop] = value
    this.setState({
      user: user
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
        {...this.state}/>
    )
  }
}

const mapStateToProps = (state) => ({
  userReducer: state.user
})

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  createUser: (user) => dispatch(createUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

import React, { Component } from 'react'
import Login from '../Components/Login'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import { firebaseApp } from '../Config/firebase'
import { ToastAndroid } from 'react-native'
import { authenticate } from '../Actions/LoginActions'

class LoginContainer extends Component {

  login = (userEmail, passwd) => {

    userEmail = 'allendes91@gmail.com'
    passwd = '1234567'

    this.props.authenticate(userEmail, passwd)

    console.log(this.props.auth)

  }

  successLogin = (result) => {
    this.props.navigateTo('productsContainer', 'loginContainer')
  }

  register = () => {
    this.props.navigateTo('userRegistry', 'loginContainer')
  }

  render() {
    return <Login
              login={this.login}
              register={this.register}/>
  }
}

mapStateToProps = state => ({
  auth: state.auth
})

mapDispatchToProps = (dispatch) => ({
  authenticate: (email, passwd) => dispatch(authenticate(email, passwd)),
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

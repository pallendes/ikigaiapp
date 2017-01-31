import React, { Component } from 'react'
import Login from '../Components/Login'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import { firebaseApp } from '../Config/firebase'
import { ToastAndroid } from 'react-native'
import { authenticate } from '../Actions/LoginActions'

class LoginContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      login: {
        userEmail: '',
        passwd: ''
      }
    }
  }

  componentWillReceiveProps = (nextProps) => {
    // if (nextProps.auth.authenticated) {
    //   this.props.navigateTo('productsContainer', 'loginContainer')
    // }
  }

  login = async () => {

    try {
      await this.props.authenticate(this.state.login.userEmail, this.state.login.passwd)
    } catch(err) {
      console.error('err ', err);
      ToastAndroid.show('An error has ocurred', ToastAndroid.SHORT)
    }

    if(this.props.auth.authenticated) {
      this.props.navigateTo('productsContainer', 'loginContainer')
    } else {
      ToastAndroid.show(this.props.auth.errorMessage, ToastAndroid.SHORT)
    }

  }

  handleChangeText = (value, prop) => {

    let login = this.state.login
    login[prop] = value

    this.setState({
      login: login
    })

  }

  register = () => {
    this.props.navigateTo('userRegistry', 'loginContainer')
  }

  render() {
    return <Login
              login={this.login}
              register={this.register}
              handleChangeText={this.handleChangeText}
              {...this.props}/>
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

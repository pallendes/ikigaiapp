import React, { Component } from 'react'
import UserRegistry from '../Components/UserRegistry'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'

class UserContainer extends Component {

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  render() {
    return (
      <UserRegistry goBack={this.goBack}/>
    )
  }
}

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute))
})

export default connect(null, mapDispatchToProps)(UserContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import UserDetail from '../Components/UserDetail'

class UserDetailContainer extends Component {

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  render () {
    return (
      <UserDetail
        user={this.props.userReducer.currentUser}
        products={this.props.products}
        goBack={this.goBack} />
    )
  }

}

const mapStateToProps = state => ({
  userReducer: state.user,
  products: state.products.productList
})

const mapDispatchToProps = dispatch => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailContainer)

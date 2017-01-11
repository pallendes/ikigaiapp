import React, { Component } from 'react'
import NewProduct from '../Components/NewProduct'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'

class NewProductContainer extends Component {

  goBack = () => {
    this.props.navigateTo('productsContainer', 'productsContainer')
  }

  render() {
    return (
      <NewProduct goBack={this.goBack}/>
    )
  }

}

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute))
})

export default connect(null, mapDispatchToProps)(NewProductContainer)

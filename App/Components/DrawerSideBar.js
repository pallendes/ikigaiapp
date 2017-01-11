import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Content, List, ListItem } from 'native-base'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'

class DrawerSideBar extends Component {

  goTo = (scene) => {
    this.props.navigateTo(scene, 'productsContainer')
  }

  render() {
    return (
      <Content style={style.sidebar}>
        <List>
          <ListItem button onPress={() => this.goTo('productsContainer')} >
            <Text>Products</Text>
          </ListItem>
          <ListItem button onPress={() => this.goTo('userRegistry')} >
            <Text>User Account</Text>
          </ListItem>
        </List>
      </Content>
    )
  }
}

const style = StyleSheet.create({
  sidebar: {
    flex: 1,
    padding: 10,
    paddingRight: 10,
    paddingLeft: 0,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
})

mapStateToProps = (state) => ({
  navigation: state.navigation
})

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerSideBar)

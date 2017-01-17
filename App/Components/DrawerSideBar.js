import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Content, List, ListItem, Thumbnail, View } from 'native-base'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import { logOut } from '../Actions/LoginActions'

class DrawerSideBar extends Component {

  goTo = (scene) => {
    this.props.navigateTo(scene, 'productsContainer')
  }

  logOut = () => {
    this.props.logOut()
    this.props.navigateTo('loginContainer', 'loginContainer')
  }

  render() {
    return (
      <View>
        <View style={{alignItems: 'center', backgroundColor: '#0A69FE', padding: 30}}>
          <Thumbnail size={100} source={require('../Images/Photo-not-available.png')} />
        </View>
        <Content style={style.sidebar}>
          <List>
            <ListItem button onPress={() => this.goTo('productsContainer')} >
              <Text>Products</Text>
            </ListItem>
            <ListItem button onPress={() => this.goTo('userRegistry')} >
              <Text>User Account</Text>
            </ListItem>
            <ListItem button onPress={() => this.logOut()} >
              <Text>Logout</Text>
            </ListItem>
          </List>
        </Content>
      </View>
    )
  }
}

const style = StyleSheet.create({
  sidebar: {
    flex: 1,
    padding: 10,
    paddingRight: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
  },
})

mapStateToProps = (state) => ({
  auth: state.auth,
  navigation: state.navigation
})

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerSideBar)

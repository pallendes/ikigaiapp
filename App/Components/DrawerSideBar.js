import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Content, List, ListItem, Thumbnail, View } from 'native-base'
import { connect } from 'react-redux'
import navigateTo from '../Actions/SideBarNav'
import { logOut } from '../Actions/LoginActions'

const style = StyleSheet.create({
  sidebarText: {
    color: '#FFF',
    marginTop: 10
  },
  sidebar: {
    flex: 1,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  sidebarHeader: {
    alignItems: 'center',
    backgroundColor: '#4179F7',
    padding: 30,
    paddingBottom: 15
  }
})

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
        <View style={style.sidebarHeader}>
          <Thumbnail size={100} source={require('../Images/Photo-not-available.png')} />
          <Text style={style.sidebarText} note>{this.props.user.user ? this.props.user.user.email : 'Annonymous'}</Text>
        </View>
        <Content style={style.sidebar}>
          <List>
            <ListItem button onPress={() => this.goTo('productsContainer')} >
              <Text>Products</Text>
            </ListItem>
            <ListItem button onPress={() => this.goTo('newProductContainer')} >
              <Text>Create product</Text>
            </ListItem>
            <ListItem button onPress={() => this.goTo('userDetailContainer')} >
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

mapStateToProps = (state) => ({
  auth: state.auth,
  navigation: state.navigation,
  user: state.user
})

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerSideBar)

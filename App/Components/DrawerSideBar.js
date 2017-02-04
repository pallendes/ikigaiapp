import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Content, List, ListItem, Thumbnail, View, Icon } from 'native-base'
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
    backgroundColor: '#fff'
  },
  sidebarHeader: {
    alignItems: 'center',
    backgroundColor: '#4179F7',
    padding: 30,
    paddingBottom: 15
  },
  icon: {
    paddingRight: 10,
    fontSize: 26,
    color: '#0A69FE'
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

  render () {
    let pictureUri = this.props.user.currentUser !== null && this.props.user.currentUser.pictureUri !== ''
      ? { uri: this.props.user.currentUser.pictureUri }
      : require('../Images/Photo-not-available.png')

    return (
      <View>
        <View style={style.sidebarHeader}>
          <Thumbnail size={100} source={pictureUri} />
          <Text style={style.sidebarText} note>{this.props.user.currentUser ? this.props.user.currentUser.email : 'Annonymous'}</Text>
        </View>
        <Content style={style.sidebar}>
          <List>
            <ListItem button iconLeft onPress={() => this.goTo('productsContainer')} >
              <Icon name='ios-pricetags-outline' style={style.icon} />
              <Text>Products</Text>
            </ListItem>
            <ListItem button iconLeft onPress={() => this.goTo('newProductContainer')} >
              <Icon name='ios-add-circle-outline' style={style.icon} />
              <Text>Create product</Text>
            </ListItem>
            <ListItem button iconLeft onPress={() => this.goTo('userDetailContainer')} >
              <Icon name='ios-person-outline' style={style.icon} />
              <Text>User Account</Text>
            </ListItem>
            <ListItem button iconLeft onPress={() => this.logOut()} >
              <Icon name='ios-log-out' style={style.icon} />
              <Text>Logout</Text>
            </ListItem>
          </List>
        </Content>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  navigation: state.navigation,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerSideBar)

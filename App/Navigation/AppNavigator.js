import { Drawer } from 'native-base'
import React, { Component } from 'react'
import { closeDrawer } from '../Actions/DrawerActions'
import { connect } from 'react-redux'
import DrawerSideBar from '../Components/DrawerSideBar'
import { actions } from 'react-native-navigation-redux-helpers';
import { BackAndroid, StatusBar, NavigationExperimental } from 'react-native';

import ProductsContainer from '../Containers/ProductsContainer'
import ProductDetailContainer from '../Containers/ProductDetailContainer'
import UserContainer from '../Containers/UserContainer'
import NewProductContainer from '../Containers/NewProductContainer'
import LoginContainer from '../Containers/LoginContainer'
import UserDetailContainer from '../Containers/UserDetailContainer'

const { popRoute, pushRoute, } = actions;

const {
  CardStack: NavigationCardStack
} = NavigationExperimental;

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    popRoute: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
      routes: React.PropTypes.array,
    }),
  }

  componentDidMount = () => {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this.props.navigation.routes

      if (routes[routes.length - 1].key === 'home' || routes[routes.length - 1].key === 'login') {
        return false
      }

      this.props.popRoute(this.props.navigation.key);
      return true
    });
  }

  componentDidUpdate = () => {

    if (this.props.drawerState === 'opened') {
      this.openDrawer()
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.close()
    }
  }

  popRoute = () => {
    this.props.popRoute()
  }

  openDrawer = () => {
    this._drawer.open()
  }

  closeDrawer = () => {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer()
    }
  }

  _renderScene = (props) => {
    switch (props.scene.route.key) {
      case 'loginContainer':
        return <LoginContainer />
      case 'productsContainer':
        return <ProductsContainer />;
      case 'productDetailContainer':
        return <ProductDetailContainer {...props.scene.route.passProps}/>;
      case 'userRegistry':
        return <UserContainer />
      case 'userDetailContainer':
        return <UserDetailContainer />
      case 'newProductContainer':
        return <NewProductContainer />
      default :
        return <LoginContainer />;
    }
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<DrawerSideBar />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
        >
        <NavigationCardStack
          navigationState={this.props.navigation}
          renderOverlay={this._renderOverlay}
          renderScene={this._renderScene}
        />
      </Drawer>
    )
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const mapDispatchToProps = (dispatch) => ({
    closeDrawer: () => dispatch(closeDrawer()),
    popRoute: key => dispatch(popRoute(key))
})

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  navigation: state.navigation,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)

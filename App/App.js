/**
 * @flow
 */
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import store from './Config/store'
import { Provider } from 'react-redux'
import ProductsContainer from './Containers/ProductsContainer'
import NavigationRouter from './Navigation/NavigationRouter'
import AppNavigator from './Components/AppNavigator'

class App extends Component {
  render() {
     return (
      <Provider store={store} >
        <ProductsContainer />
      </Provider>
     )
  }
}

export default App;

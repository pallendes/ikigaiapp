/**
 * @flow
 */
import React, { Component } from 'react'
import store from './Config/Store'
import { Provider } from 'react-redux'
import AppNavigator from './Navigation/AppNavigator'

class App extends Component {
  render () {
    return (
      <Provider store={store} >
        <AppNavigator />
      </Provider>
    )
  }
}

export default App

import { cardStackReducer } from 'react-native-navigation-redux-helpers'

const initialState = {
  key: 'global',
  index: 0,
  routes: [
    {
      key: 'loginContainer',
      index: 0,
      passProps: {}
    }
  ]
}

module.exports = cardStackReducer(initialState)

import reducers from '../Reducers/reducers'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
// import { reduxFirebase } from 'react-redux-firebase' remover dependencia
import {persistStore, autoRehydrate} from 'redux-persist'
import { AsyncStorage } from 'react-native'

const logger = createLogger();

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middlewares));

// const store = createStore(reducers, applyMiddleware(...middlewares), autoRehydrate());
// persistStore(store, { storage: AsyncStorage, blacklist: ['navigation'] })

export default store;

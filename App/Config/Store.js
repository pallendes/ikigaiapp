import reducers from '../Reducers/reducers'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
// import { reduxFirebase } from 'react-redux-firebase' remover dependencia

const logger = createLogger();

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;

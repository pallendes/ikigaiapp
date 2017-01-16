import reducers from '../Reducers/reducers'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
// import { reduxFirebase } from 'react-redux-firebase' remover dependencia

const logger = createLogger();

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;

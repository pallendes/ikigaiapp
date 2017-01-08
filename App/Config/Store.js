import reducers from '../Reducers/reducers'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;

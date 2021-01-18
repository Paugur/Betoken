import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './root-reducer'

const ware = [logger];
const store = createStore(reducer, applyMiddleware(...ware));

export default store;
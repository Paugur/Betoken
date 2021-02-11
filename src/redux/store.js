import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./root-reducer";
import thunk from "redux-thunk";

const middleWares = [logger, thunk];
const store = createStore(reducer, applyMiddleware(...middleWares));

export default store;

// Import required lib
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Import root reducer
import rootReducer from "./rootReducer";
import defaultState from "./stateData.js";

// Import config
import masterConfig from "../config";

// Load from local storage state if page refreshes
const localStorageKey = masterConfig.reduxLocalStorageName;
const initialState = localStorage[localStorageKey]
  ? JSON.parse(localStorage[localStorageKey])
  : defaultState;

// Make saver function for persistence of state
const saver = (store) => (next) => (action) => {
  let result = next(action);
  localStorage[localStorageKey] = JSON.stringify(store.getState());
  return result;
};

// Make storeFactory function
const storeFactory = () =>
  applyMiddleware(logger, saver)(createStore)(rootReducer, initialState);

export default storeFactory;

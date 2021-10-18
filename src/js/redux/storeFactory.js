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

// const storeFactory = () =>
//   applyMiddleware(logger, saver)(createStore)(rootReducer, initialState);

// const storeFactory = () => {
//   return applyMiddleware(logger, saver)(createStore)(rootReducer, initialState);
// };

// const storeFactory = () => {
//   const f = applyMiddleware(logger, saver)(createStore)(
//     rootReducer,
//     initialState
//   );
//   return f;
// };

// const storeFactory = () => {
//   const a = applyMiddleware(logger, saver);
//   const f = a(createStore)(rootReducer, initialState);
//   return f;
// };

const storeFactory = () => {
  // applyMiddleware returns a function
  // this returned function (a) expects createStore as its argument (createStore is a function)
  const a = applyMiddleware(logger, saver);
  // a (which is a func returned from applyMiddleware) is invoked with createStore as its argument
  // this function returns a function (c)
  const c = a(createStore);
  // c when invoked with rootReducer and initialState returns the function
  // which when invoked returns the store with the configured middleware
  const f = c(rootReducer, initialState);
  return f;
};

// const store = createStore(reducer, initialState);

export default storeFactory;

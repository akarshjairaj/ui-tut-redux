// Import required libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Import custom component
import App from "./js/App";

// Import contexts

// Import utils/data
import store from "./js/redux/storeInitializer";
import masterConfig from "./js/config";

// Import config

// Import action creators

// Import APIs

//Defining static variables
const rootElement = document.getElementById("root");

// Log Initial State
console.log("%cAPPLICATION BOOTSTRAPPED", masterConfig.logStyles.info);
console.log("INITIAL STORE ", store);
console.log("INITIAL STORE STATE", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

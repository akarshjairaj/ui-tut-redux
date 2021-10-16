// Import required libraries
import React from "react";
import { Provider } from "react-redux";

// Import custom component
import App from "./App";

// Import contexts

// Import utils/data
import store from "./redux/storeInitializer";
import masterConfig from "./config";

// Import config

// Import action creators

// Import APIs

// Defining static variables

// Log Initial State
console.log("%cAPPLICATION BOOTSTRAPPED", masterConfig.logStyles.info);
console.log("INITIAL STORE ", store);
console.log("INITIAL STORE STATE", store.getState());

function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppContainer;

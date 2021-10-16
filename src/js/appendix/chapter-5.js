// * DEFINING REQUIRED CONSTANTS
// Logger
const logStyles = { info: "font-size: 20px; color: yellow;" };
const reduxLocalStorageName = "globalStoreState";

console.log("%cindex.js loaded successfully", logStyles.info);

// * Making required global variables
const redux = window.Redux;
const reduxLogger = window.reduxLogger;
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const logger = reduxLogger.logger;
const saver = (store) => (next) => (action) => {
  let result = next(action);
  localStorage[reduxLocalStorageName] = JSON.stringify(store.getState());
  return result;
};
const defaultState = { value: 0 };
// For persistence of state
const initialState = localStorage[reduxLocalStorageName]
  ? JSON.parse(localStorage[reduxLocalStorageName])
  : defaultState;
const rootElement = document.getElementById("root");

// ***************************************** STATE *****************************************
// * MAKING STORE
// 1. ACTIONS
const incrementAction = {
  type: "COUNTER/INCREMENT",
  payload: {},
};
// 2. ACTION CREATORS
const increment = (payload) => {
  const {} = payload;
  const payloadFinal = {};
  return {
    type: "COUNTER/INCREMENT",
    payload: payloadFinal,
  };
};
const decrement = (payload) => {
  const {} = payload;
  const payloadFinal = {};
  return {
    type: "COUNTER/DECREMENT",
    payload: payloadFinal,
  };
};
// 3. REDUCERS
function counterReducer(state = initialState, action) {
  const { type: actionType = "", payload = {} } = action;
  const {} = payload;

  let newState = { ...state };
  switch (actionType) {
    case "COUNTER/INCREMENT":
      newState = { value: state.value + 1 };
      break; // ! NEVER FORGET THIS
    case "COUNTER/DECREMENT":
      newState = { value: state.value - 1 };
      break; // ! NEVER FORGET THIS
    default:
      // ! This may logged for the first time when createStore is invoked
      console.groupCollapsed("UNIDENTIFIED TYPE IN counterReducer");
      console.log("state", state);
      console.log("action", action);
      console.groupEnd();
  }
  // ? You can validate your state here before returning
  return newState;
}

// 4. STORE FACTORY
//    createStore is the function which is provided by redux lib and takes in a reducer to create a store
//    storeFactory is a custom function which we make to add required helper middleware (eg logger and saver)
const rootReducer = counterReducer; // We will later combine multiple reducers using combineReducers
const storeFactory = () =>
  applyMiddleware(logger, saver)(createStore)(rootReducer, initialState);

// 5. STORE
const store = storeFactory();
console.log("store", store);

// a. getState
console.log("INITIAL STORE STATE ->", store.getState());

// b. subscribe
// store.subscribe(() =>
//   console.log("%cSTORE STATE UPDATED ->", logStyles.info, store.getState())
// );
store.subscribe(() => renderUi()); // ! Only 1st subsciption runs

// ************************************** UI (DECLARATIVE) **************************************

// * Master renderUi
const renderUi = () => {
  function App(props) {
    const { store } = props;
    const { value: counterValue } = store.getState();

    // Define event handlers
    const handleIncrement = () => {
      var payload = {};
      var sampleAction = increment(payload);
      store.dispatch(sampleAction);
    };
    const handleDecrement = () => {
      var payload = {};
      var sampleAction = decrement(payload);
      store.dispatch(sampleAction);
    };

    return (
      <main>
        <p>{counterValue}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </main>
    );
  }

  // Render App component inside the root element
  ReactDOM.render(<App store={store} />, rootElement);
};

// * Make UI
// Invoke renderUi for the first time when file loads
renderUi();

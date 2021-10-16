// * DEFINING REQUIRED CONSTANTS
// Logger
const logStyles = { info: "font-size: 20px; color: yellow;" };

console.log("%cindex.js loaded successfully", logStyles.info);

// * OVERVIEW
// https://redux.js.org/tutorials/essentials/part-1-overview-concepts#state-management
function Counter() {
  // useState will come from react
  const useState = () => {};

  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // View: the UI definition
  return "JSX";
}

// * TERMINOLOGY
// 1. ACTIONS
//    An action is a plain JavaScript object that has a type field.
//    You can think of an action as an event that describes something that happened in the application.
const addTodoAction = {
  type: "TODOS/ADD_TODO",
  payload: { label: "Buy milk", completed: false },
};
// 2. ACTION CREATORS
//    An action creator is a function that creates and returns an action object.
//    We typically use these so we don't have to write the action object by hand every time.
const addTodo = (payload) => {
  const { label = "", completed = false } = payload;
  const payloadFinal = { label, completed };
  return {
    type: "TODOS/ADD_TODO",
    payload: payloadFinal,
  };
};
// 3. REDUCERS
//    A reducer is a function that receives the current state and an action object,
//    decides how to update the state if necessary, and returns the new state:
//    (state, action) => newState.
//    You can think of a reducer as an event listener which handles
//    events based on the received action (event) type.
const initialState = { value: 0 };

// Using if...else
function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === "COUNTER/INCREMENT") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}
// Using switch case
function counterReducer(state = initialState, action) {
  const { type: actionType = "", payload = {} } = action;
  const {} = payload;

  let newState = { ...state };
  switch (actionType) {
    case "COUNTER/INCREMENT":
      newState = { value: state.value + 1 };
      break; // ! NEVER FORGET THIS
    default:
      console.groupCollapsed("UNIDENTIFIED TYPE IN counterReducer");
      console.log("state", state);
      console.log("action", action);
      console.groupEnd();
  }
  // ? You can validate your state here before returning
  return newState;
}

// 4. STORE
//    The current Redux application state lives in an object called the store.
//    Create a Redux store holding the state of your app using createStore (comes from redux lib)
// Below is a very simplified version of createStore.
// slimRedux.js (99 lines of code) can be found here
// https://gist.github.com/gaearon/ffd88b0e4f00b22c3159
const createStore = () => {
  const subscribe = () => {};
  const dispatch = () => {};
  const getState = () => {};
  const store = { subscribe, dispatch, getState };
  return store;
};
const store = createStore(counterReducer);
//    Its API is:
//      a. subscribe
//      b. dispatch
//      c. getState
// a. subscribe
//    Takes in a callback function and runs the func everytime the store changes
//    A simple example can be logging the store state everytime store changes
//    A complex example can be to update the UI if store state changes
store.subscribe(() => console.log(store.getState()));
store.subscribe(() => "Update UI");

// b. dispatch
//    The only way to mutate the internal state is to dispatch an action.
//    The actions can be serialized, logged or stored and later replayed.
// WAY 1
var sampleAction = {
  type: "TODOS/ADD_TODO",
  payload: { label: "Buy milk", completed: false },
};
store.dispatch(sampleAction);
// WAY 2 (Abstracting away adding hard coding type)
var payload = { label: "Buy milk", completed: false };
var sampleAction = addTodo(payload);
store.dispatch(sampleAction);

// c. getState
//    To get the latest store store
console.log(store.getState());

// * REFERENCE
// Essentials: https://redux.js.org/tutorials/essentials/part-1-overview-concepts

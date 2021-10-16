// Import constants
import C from "../contants";

// Import initial state
import { initialCounterState as defaultCounterState } from "../stateData";

function counter(state = defaultCounterState, action) {
  const { type: actionType = "", payload = {} } = action;
  const { replacedState = { defaultCounterState } } = payload;

  let newState = { ...state };
  switch (actionType) {
    case C.COUNTER_INCREMENT:
      newState = { value: state.value + 1 };
      break; // ! NEVER FORGET THIS
    case C.COUNTER_DECREMENT:
      newState = { value: state.value - 1 };
      break; // ! NEVER FORGET THIS
    case C.COUNTER_REPLACE:
      newState = { ...replacedState };
      break; // ! NEVER FORGET THIS
    default:
      // ! This may logged for the first time when createStore is invoked
      console.groupCollapsed("UNIDENTIFIED TYPE IN counterReducer");
      console.log("state", state);
      console.log("action", action);
      console.groupEnd();
  }
  // * You can validate your state here before returning
  return newState;
}

export default counter;

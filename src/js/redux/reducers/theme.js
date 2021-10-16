// Import constants
import C from "../contants";

// Import initial state
import { initialTheme as defaultThemeState } from "../stateData";

function theme(state = defaultThemeState, action) {
  const { type: actionType = "", payload = {} } = action;
  const {} = payload;

  let newState = state;
  switch (actionType) {
    case C.THEME_TOGGLE:
      newState = state === "dark" ? "light" : "dark";
      break; // ! NEVER FORGET THIS
    default:
      // ! This may logged for the first time when createStore is invoked
      console.groupCollapsed("UNIDENTIFIED TYPE IN themeReducer");
      console.log("state", state);
      console.log("action", action);
      console.groupEnd();
  }
  // * You can validate your state here before returning
  return newState;
}

export default theme;

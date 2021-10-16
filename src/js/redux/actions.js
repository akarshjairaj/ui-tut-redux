// Import constants
import C from "./contants";

// * REFERENCE
// const incrementAction = {
//   type: "COUNTER/INCREMENT",
//   payload: {},
// };
const increment = (payload) => {
  const {} = payload;
  const payloadFinal = {};
  return {
    type: C.COUNTER_INCREMENT,
    payload: payloadFinal,
  };
};

// * REFERENCE
// const decrementAction = {
//   type: "DECREMENT/INCREMENT",
//   payload: {},
// };
const decrement = (payload) => {
  const {} = payload;
  const payloadFinal = {};
  return {
    type: C.COUNTER_DECREMENT,
    payload: payloadFinal,
  };
};

// * REFERENCE
// const replaceAction = {
//   type: "COUNTER/REPLACE",
//   payload: { replacedState = { value: 0 } },
// }
const replace = (payload) => {
  const { replacedState = { value: 0 } } = payload;
  const payloadFinal = { replacedState };
  return {
    type: C.COUNTER_REPLACE,
    payload: payloadFinal,
  };
};

// * REFERENCE
// const replaceAction = {
//   type: "COUNTER/REPLACE",
//   payload: { replacedState = { value: 0 } },
// }
const toggleTheme = (payload) => {
  const {} = payload;
  const payloadFinal = {};
  return {
    type: C.THEME_TOGGLE,
    payload: payloadFinal,
  };
};

export { increment, decrement, replace, toggleTheme };

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

export { increment, decrement };

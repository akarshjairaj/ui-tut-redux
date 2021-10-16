// Nodes Individual state
const initialCounterState = { value: 0 };
const initialTheme = "light";

// Root initial state
const initialState = {
  counter: { ...initialCounterState },
  theme: initialTheme,
};

export { initialCounterState, initialTheme };
export default initialState;

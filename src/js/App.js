// Import required libraries
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import custom component
import Counter from "./components/Counter";

// Import contexts

// Import utils/data

// Import config

// Import action creators
import { replace, toggleTheme } from "./redux/actions";

// Import APIs

// Defining static variables
const selectorCounterValue = (state) => ({
  counterValue: state.counter.value,
});
const selectorTheme = (state) => state.theme;

function App() {
  // Using required hooks
  const counter = useSelector(selectorCounterValue);
  const { counterValue = 0 } = counter;
  const theme = useSelector(selectorTheme);
  const dispatch = useDispatch();

  // DEBUGGER
  useEffect(() => {
    console.groupCollapsed("RENDERED | App.js");
    console.log("counter", counter);
    console.groupEnd();
  });

  // Define event handlers
  const handleChange = (value) => {
    const payload = { replacedState: value };
    const sampleAction = replace(payload);
    dispatch(sampleAction);
  };
  const handleThemeToggle = () => {
    dispatch(toggleTheme({}));
  };

  return (
    <main className={theme}>
      <button onClick={handleThemeToggle}>TOGGLE THEME</button>
      <h1>Self-Contained Counter | Connected to Store</h1>
      <Counter value={counterValue} onChange={handleChange} />
      <br />
      <h1>Self-Contained Counter | Not connected to Store</h1>
      <Counter value={0} />
    </main>
  );
}

export default App;

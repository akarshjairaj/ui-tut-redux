// Import required libraries
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Import custom component
import Counter from "./components/Counter";

// Import contexts

// Import utils/data

// Import config

// Import action creators

// Import APIs

// Defining static variables
const mapStateToProps = (state) => state;
// * Examples
// // 1. Store
// const selectorStore = (state) => state;
// const store = useSelector(selectorStore);
// const { counter = { value: 0 } } = store;
// const { value: counterValue = 0 } = counter;
// // 2. Counter
// const selectorCounter = (state) => ({ counter: state.counter });
// const { counter = { value: 0 } } = useSelector(selectorCounter);
// const { value: counterValue = 0 } = counter;
// // 3. Counter Value
// const selectorCounterValue = (state) => ({
//   counterValue: state.counter.value,
// });
// const counter = useSelector(selectorCounterValue);
// const { counterValue = 0 } = counter;

function App() {
  // Using required hooks
  const store = useSelector(mapStateToProps);
  const { counter = { value: 0 } } = store;
  const { value: counterValue = 0 } = counter;

  // DEBUGGER
  useEffect(() => {
    console.groupCollapsed("RENDERED | App.js");
    console.log("store", store);
    console.groupEnd();
  });

  return (
    <main>
      <Counter value={counterValue} />
    </main>
  );
}

export default App;

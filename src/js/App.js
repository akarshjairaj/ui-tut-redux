// Import required libraries
import { useEffect } from "react";

// Import custom component

// Import contexts

// Import utils/data

// Import config

// Import action creators
import { increment, decrement } from "./redux/actions";

// Import APIs

//Defining static variables

function App(props) {
  // Destructure props
  const { store } = props;

  // Destructure required variables
  const { counter } = store.getState();
  const { value: counterValue } = counter;

  // Define event handlers
  const handleIncrement = () => {
    const payload = {};
    const sampleAction = increment(payload);
    store.dispatch(sampleAction);
  };
  const handleDecrement = () => {
    const payload = {};
    const sampleAction = decrement(payload);
    store.dispatch(sampleAction);
  };

  // DEBUGGER
  useEffect(() => {
    console.groupCollapsed("RENDERED | App.js");
    console.log("store", store);
    console.log("store.getState", store.getState());
    console.groupEnd();
  });

  return (
    <main>
      <p>{counterValue}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </main>
  );
}

export default App;

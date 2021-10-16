// Import required libraries
import { useEffect, useReducer } from "react";

// Import custom component

// Import contexts

// Import utils/data
import useCustomReducer from "../hooks/useCustomReducer";

// Import config

// Import reducers
import counterReducer from "../redux/reducers/counter";

// Import action creators
import { increment, decrement } from "../redux/actions";

// Import APIs

//Defining static variables

function Counter(props) {
  // Using required hooks

  // Destructure props
  const { value = 0, onChange = () => {} } = props;

  // Defining requried state
  const [state, dispatch] = useReducer(counterReducer, { value });
  // const [state, dispatch] = useCustomReducer(counterReducer, { value });

  // Defining required side effects
  // Update parent state evertime value changes
  useEffect(() => {
    onChange(state);
  }, [state]);

  // Define event handlers
  const handleIncrement = () => {
    const payload = {};
    const sampleAction = increment(payload);
    dispatch(sampleAction);
  };
  const handleDecrement = () => {
    const payload = {};
    const sampleAction = decrement(payload);
    dispatch(sampleAction);
  };

  return (
    <article>
      <p>{state.value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </article>
  );
}

export default Counter;

// Import required libraries
import { useContext } from "react";

// Import custom component

// Import contexts
// Import contexts
import StoreContext from "../contexts/StoreContext";

// Import utils/data

// Import config

// Import action creators
import { increment, decrement } from "../redux/actions";

// Import APIs

//Defining static variables

function Counter(props) {
  // Destructure props
  const { value = 0 } = props;

  // Get contexts
  const { store } = useContext(StoreContext);

  // Destructure required variables
  const { dispatch } = store;

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
      <p>{value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </article>
  );
}

export default Counter;

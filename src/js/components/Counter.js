// Import required libraries
import { connect } from "react-redux";

// Import custom component

// Import contexts

// Import utils/data

// Import config

// Import action creators
import { increment, decrement } from "../redux/actions";

// Import APIs

//Defining static variables

function Counter(props) {
  // Destructure props
  const { value = 0, dispatch = () => {} } = props;

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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Counter);

// Import required libraries
import { Component } from "react";

// Import custom component

// Import contexts

// Import utils/data

// Import config

// Import action creators
import { increment, decrement } from "./redux/actions";

// Import APIs

//Defining static variables

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { store } = this.props;
    console.groupCollapsed("MOUNTED | App.js");
    console.log("store", store);
    console.log("store.getState", store.getState());
    console.groupEnd();
  }

  componentDidUpdate() {
    const { store } = this.props;
    console.groupCollapsed("UPDATED | App.js");
    console.log("store", store);
    console.log("store.getState", store.getState());
    console.groupEnd();
  }

  render() {
    // Destructure props
    const { store } = this.props;

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

    return (
      <main>
        <p>{counterValue}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </main>
    );
  }
}

export default App;

// Import required libraries
import { Component } from "react";

// Import custom component
import Counter from "./components/Counter";

// Import contexts

// Import utils/data

// Import config

// Import action creators

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

    return (
      <main>
        <Counter value={counterValue} store={store} />
      </main>
    );
  }
}

export default App;

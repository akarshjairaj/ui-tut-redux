// Import required libraries
import { Component } from "react";

// Import custom component
import Counter from "./components/Counter";

// Import contexts
import StoreContext from "./contexts/StoreContext";

// Import utils/data

// Import config

// Import action creators

// Import APIs

//Defining static variables

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentDidMount() {
    const { store } = this.context;
    console.groupCollapsed("MOUNTED | App.js");
    console.log("store", store);
    console.log("store.getState", store.getState());
    console.groupEnd();
  }

  componentDidUpdate() {
    const { store } = this.context;
    console.groupCollapsed("UPDATED | App.js");
    console.log("store", store);
    console.log("store.getState", store.getState());
    console.groupEnd();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    // Destructure props
    const { store } = this.context;

    // Destructure required variables
    const { counter } = store.getState();
    const { value: counterValue } = counter;

    return (
      <main>
        <Counter value={counterValue} />
      </main>
    );
  }
}

// * To let App know which context to consume
App.contextType = StoreContext;

export default App;

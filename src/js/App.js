// Import required libraries
import { Component } from "react";
import { connect } from "react-redux";

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
    const { store = {} } = this.props;
    console.groupCollapsed("MOUNTED | App.js");
    console.log("store", store);
    console.groupEnd();
  }

  componentDidUpdate() {
    const { store = {} } = this.props;
    console.groupCollapsed("UPDATED | App.js");
    console.log("store", store);
    console.groupEnd();
  }

  render() {
    // Destructure props
    const { counter = {}, dispatch = () => {} } = this.props;

    // Destructure required variables
    const { value: counterValue } = counter;

    return (
      <main>
        <Counter value={counterValue} />
      </main>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);

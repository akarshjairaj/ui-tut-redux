// Import required lib
import { combineReducers } from "redux";

// Import required reducers
import counterReducer from "./reducers/counter";

const rootReducer = combineReducers({ counter: counterReducer });

export default rootReducer;

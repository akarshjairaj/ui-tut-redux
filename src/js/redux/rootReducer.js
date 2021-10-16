// Import required lib
import { combineReducers } from "redux";

// Import required reducers
import counterReducer from "./reducers/counter";
import themeReducer from "./reducers/theme";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export default rootReducer;

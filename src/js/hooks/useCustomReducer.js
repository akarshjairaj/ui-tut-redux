import { useCallback, useReducer } from "react";

const getCurrentTimeFormatted = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const milliseconds = currentTime.getMilliseconds();
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

const useReducerLogger = (reducer) => {
  const reducerWithLogger = useCallback(
    (state, action) => {
      const next = reducer(state, action);
      console.group(
        `%cUSE REDUCER | ACTION: %c${
          action.type
        } %cat ${getCurrentTimeFormatted()}`,
        "color: #FDE725; font-weight: bold;",
        "color: #A49D78; font-weight: bold;",
        "color: lightblue; font-weight: lighter;"
      );
      console.log(
        "%cPREVIOUS STATE:",
        "color: #9E9E9E; font-weight: 700;",
        state
      );
      console.log("%cACTION:", "color: #00A7F7; font-weight: 700;", action);
      console.log("%cNEXT STATE:", "color: #47B04B; font-weight: 700;", next);
      console.groupEnd();
      return next;
    },
    [reducer]
  );

  return reducerWithLogger;
};

const useCustomReducer = (reducer = () => {}, initialState = []) =>
  useReducer(useReducerLogger(reducer), initialState);

export default useCustomReducer;

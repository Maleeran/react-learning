import { useState, useReducer } from "react";
// import "../style.css";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
};

const Counter = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="container">
      <div>
        <h1 className="number">{state.count}</h1>
      </div>

      <div className="btns-container">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="increment"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="increment"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="increment"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

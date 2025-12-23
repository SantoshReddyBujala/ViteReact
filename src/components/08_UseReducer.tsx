import React, { useReducer } from "react";
type CurrentState = {
  count: number;
  step: number;
};

const init = (initialCount: number): CurrentState => {
  return { count: initialCount, step: 1 };
};

const CountReducer = (
  state: CurrentState,
  action: { type: string; payload?: number }
): CurrentState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setStep":
      return { ...state, step: action.payload || 1 };
    default:
      return state;
  }
};

const UseReducer = ({ initial = 0 }: { initial?: number }) => {
  const [state, dispatch] = useReducer(CountReducer, initial, init);
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "setStep", payload: 2 })}>
        Set Step to 2
      </button>
    </div>
  );
};

export default UseReducer;

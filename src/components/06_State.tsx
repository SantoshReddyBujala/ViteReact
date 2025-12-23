import React from "react";

const State = () => {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count is {count}</button>;
};

export default State;

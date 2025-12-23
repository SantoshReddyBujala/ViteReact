import React from "react";

const Events = () => {
  const [inputValue, setInputValue] = React.useState("");
  const submitEvent = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <form onSubmit={submitEvent}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Enter Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Events;

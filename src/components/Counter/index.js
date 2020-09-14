import React, { useState } from "react";

export default () => {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter((prevState) => ++prevState);
  }

  function decreaseCounter() {
    setCounter((prevState) => --prevState);
  }

  function resetCounter() {
    setCounter(0);
  }

  return (
    <div className="card border-0 mt-5 mx-auto">
      <div className="mx-auto">
        <h1 className="text-capitalize">counter</h1>
      </div>

      <div className="mx-auto my-3">
        <h3>{counter}</h3>
      </div>

      <div className="mx-auto">
        <button className="btn btn-outline-dark" onClick={decreaseCounter}>
          decrease
        </button>
        <button className="btn btn-outline-dark mx-2" onClick={resetCounter}>
          reset
        </button>
        <button className="btn btn-outline-dark" onClick={increaseCounter}>
          increase
        </button>
      </div>
    </div>
  );
};

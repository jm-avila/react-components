import React, { useState } from "react";
import "./index.css";

export default () => {
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operation, setOperation] = useState();

  function allClear() {
    setPreviousOperand("");
    setCurrentOperand("");
  }

  function del() {
    setCurrentOperand((prevState) => prevState.toString().slice(0, -1));
  }

  function appendNumber(number) {
    if (number === "." && currentOperand.includes(".")) return;
    setCurrentOperand((prevState) => prevState.toString() + number.toString());
  }

  function chooseOperation(operation) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    setOperation(operation);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  }

  function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    setCurrentOperand(computation.toString());
    setOperation();
    setPreviousOperand("");
  }

  function getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  function numberInput({ currentTarget: { innerText } }) {
    appendNumber(innerText);
  }

  function operationInput({ currentTarget: { innerText } }) {
    chooseOperation(innerText);
  }

  return (
    <div className="main-container">
      <div className="grid">
        <div className="output">
          <div className="previous-operand">
            {getDisplayNumber(previousOperand)} {operation}
          </div>
          <div className="current-operand">
            {getDisplayNumber(currentOperand)}
          </div>
        </div>
        <button className="span-two" onClick={allClear}>
          AC
        </button>
        <button onClick={del}>DEL</button>
        <button onClick={operationInput}>/</button>
        <button onClick={numberInput}>1</button>
        <button onClick={numberInput}>2</button>
        <button onClick={numberInput}>3</button>
        <button onClick={operationInput}>*</button>
        <button onClick={numberInput}>4</button>
        <button onClick={numberInput}>5</button>
        <button onClick={numberInput}>6</button>
        <button onClick={operationInput}>+</button>
        <button onClick={numberInput}>7</button>
        <button onClick={numberInput}>8</button>
        <button onClick={numberInput}>9</button>
        <button onClick={operationInput}>-</button>
        <button onClick={numberInput}>.</button>
        <button onClick={numberInput}>0</button>
        <button className="span-two" onClick={compute}>
          =
        </button>
      </div>
    </div>
  );
};

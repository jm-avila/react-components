import React, { useState } from "react";
import { v1 } from "uuid";
import mrSparkle from "./mr-sparkle.png";
import CheckBox from "./CheckBox";
import InputButton from "./InputButton";
import RemoveItem from "./RemoveItem";

export default () => {
  const initValue = { id: v1(), value: "Initial Item", done: false };
  const [list, setList] = useState([initValue]);

  function handleNewItem(str) {
    setList((prevState) => [
      ...prevState,
      { id: v1(), value: str, done: false },
    ]);
  }

  function updateDoneValue(id, done) {
    setList((prevState) =>
      prevState.map((item) => {
        if (item.id !== id) return item;
        item.done = done;
        return item;
      })
    );
  }

  function removeItem(id) {
    setList((prevState) => prevState.filter((item) => item.id !== id));
  }
  function emptyList() {
    setList((prevState) => prevState.filter(({ done }) => !done));
  }

  return (
    <div>
      <InputButton newItem={handleNewItem} />

      <ul className="list-group">
        {list.map(({ value, id, done }) => (
          <li key={id} className="list-group-item">
            {value}

            <CheckBox id={id} value={done} updateValue={updateDoneValue} />

            <RemoveItem id={id} removeValue={removeItem} />
          </li>
        ))}
      </ul>
      <button className="btn" onClick={emptyList}>
        <img alt="Homer Simpson as Mr Sparkle" src={mrSparkle} />
      </button>
    </div>
  );
};

import React, { useState } from "react";
import { v1 } from "uuid";
import InputButton from "./InputButton";
import ToDoList from "./ToDoList";
import MrSparkleBtn from "./MrSparkleBtn";

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

      <div className="d-flex justify-content-around">
        <ToDoList
          list={list}
          updateDoneValue={updateDoneValue}
          removeItem={removeItem}
          emptyList={emptyList}
        />

        <MrSparkleBtn emptyList={emptyList} />
      </div>
    </div>
  );
};

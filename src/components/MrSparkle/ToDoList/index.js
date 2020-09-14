import React from "react";
import CheckBox from "./CheckBox";
import RemoveItem from "./RemoveItem";

export default ({ list, removeItem, updateDoneValue }) => {
  return (
    <ul className="list-group w-100">
      {list.map(({ value, id, done }) => (
        <li key={id} className="list-group-item d-flex justify-content-between">
          <div className="align-self-center">
            <span>{value}</span>
          </div>

          <div>
            <CheckBox id={id} value={done} updateValue={updateDoneValue} />

            <RemoveItem id={id} removeValue={removeItem} />
          </div>
        </li>
      ))}
    </ul>
  );
};

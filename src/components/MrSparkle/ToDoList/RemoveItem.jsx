import React from "react";
import { FiTrash } from "react-icons/fi";

export default ({ id, removeValue }) => {
  function handleOnClick() {
    removeValue(id);
  }

  return (
    <button className="btn p-0" onClick={handleOnClick}>
      <FiTrash />
    </button>
  );
};

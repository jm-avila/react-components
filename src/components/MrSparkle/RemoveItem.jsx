import React from "react";

export default ({ id, removeValue }) => {
  function handleOnClick() {
    removeValue(id);
  }

  return (
    <button className="btn btn-warning" onClick={handleOnClick}>
      x
    </button>
  );
};

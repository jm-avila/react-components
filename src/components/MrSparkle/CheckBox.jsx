import React from "react";

export default ({ id, value, updateValue }) => {
  function handleOnClick() {
    updateValue(id, !value);
  }

  return (
    <div className="form-check">
      <label className="form-check-label" htmlFor={id}>
        Done?
      </label>
      <input
        type="checkbox"
        className="form-check-input ml-1"
        id={id}
        value={value}
        onClick={handleOnClick}
      />
    </div>
  );
};

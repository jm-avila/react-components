import React, { useState } from "react";

export default ({ newItem = () => {} }) => {
  const [value, setValue] = useState("");

  function handleClick() {
    if (!value) return;
    newItem(value);
    setValue("");
  }

  function handleOnChange(event) {
    setValue(event.currentTarget.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") handleClick();
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="What do want to do?"
        aria-label="What do want to do?"
        value={value}
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
      />
      <div className="input-group-append">
        <button className="input-group-text" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

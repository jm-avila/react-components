import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

export default ({ id, value, updateValue }) => {
  function handleOnClick() {
    updateValue(id, !value);
  }

  const icon = value ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />;

  return (
    <button className="btn" onClick={handleOnClick}>
      {icon}
    </button>
  );
};

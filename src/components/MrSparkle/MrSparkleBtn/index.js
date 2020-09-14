import React from "react";
import mrSparkle from "./mr-sparkle.png";

export default ({ emptyList }) => {
  return (
    <button className="btn" onClick={emptyList}>
      <img alt="Homer Simpson as Mr Sparkle" src={mrSparkle} />
    </button>
  );
};

import React from "react";
import "./RangeInput.scss";

const RangeInput = ({ min = 25, max = 80, label, id, handleChange, value }) => {
  return (
    <div className="range-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default RangeInput;

import React from "react";
import "./FilterItems.scss";

const FilterItems = ({
  label,
  filterChoice,
  setFilterChoice,
  acidity,
  setAcidity,
}) => {
  const handleClick = () => {
    if (filterChoice === "High Acidity") {
      setAcidity = true;
    }
    if (filterChoice == label) {
      setFilterChoice("");
    } else {
      setFilterChoice(label);
    }
  };
  return (
    <div className="filterButtons">
      <input type="checkbox" onClick={handleClick} /> <p className="filterButtons__text">{label}</p>
    </div>
  );
};

export default FilterItems;

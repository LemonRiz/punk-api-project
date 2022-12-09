import React from "react";

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
      <input type="checkbox" onClick={handleClick} /> <p>{label}</p>
    </div>
  );
};

export default FilterItems;

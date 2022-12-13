import React from "react";
import "./FilterItems.scss";

const FilterItems = ({ label, filterChoice, setFilterChoice, name }) => {

  const handleCheckbox = (event) => {
    if (event.target.checked && event.target.value.length > 0) {
      setFilterChoice([...filterChoice, event.target.value]);
    } else if (!event.target.checked) {
      const uncheckedItem = event.target.value;
      const newFilteredCheck = filterChoice.filter(
        (item) => !item.includes(uncheckedItem)
      );
      setFilterChoice(newFilteredCheck);
    } else {
      setFilterChoice([event.target.value]);
    }
  };

  return (
    <div className="filterButtons">
      <input type="checkbox" onClick={handleCheckbox} value={label} />{" "}
      <p className="filterButtons__text">{name}</p>
    </div>
  );
};

export default FilterItems;

import React from "react";
import "./FilterList.scss";
import FilterItems from "../FilterItems/FilterItems";

const FilterList = ({ filterChoice, setFilterChoice }) => {
  return (
    <div className="list">
      <FilterItems
        className="list__text"
        label="High ABV"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      <FilterItems
        className="list__text"
        label="Classic Range"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      <FilterItems
        className="list__text"
        label="High Acidity"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
    </div>
  );
};

export default FilterList;

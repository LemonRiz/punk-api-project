import React from "react";
import "./FilterList.scss";
import FilterItems from "../FilterItems/FilterItems";

const FilterList = ({ filterChoice, setFilterChoice }) => {
  return (
    <div className="list">
      <FilterItems
        className="list__text"
        label="ABV"
        name="High Alcohol Vol"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      <FilterItems
        className="list__text"
        label="CLR"
        name="Classic Range"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      <FilterItems
        className="list__text"
        label="HAC"
        name="High Acidity"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
    </div>
  );
};

export default FilterList;

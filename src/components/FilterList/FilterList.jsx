import React from "react";
import "./FilterList.scss";
import FilterItems from "../FilterItems/FilterItems";

const FilterList = ({ filterChoice, setFilterChoice }) => {
  return (
    <div>
      <FilterItems
        label="High ABV"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      <FilterItems
        label="Classic Range"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      <FilterItems
        label="High Acidity"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
    </div>
  );
};

export default FilterList;

import React from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./NavBar.scss";
import FilterList from "../../components/FilterList/FilterList";

const Navbar = ({ handleInput, searchTerm, filterChoice, setFilterChoice }) => {
  return (
    <div className="navbar">
      <Searchbox handleInput={handleInput} searchTerm={searchTerm} />
      <FilterList
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
    </div>
  );
};

export default Navbar;

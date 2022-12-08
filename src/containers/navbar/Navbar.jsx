import React from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./NavBar.scss";
import FilterList from "../../components/FilterList/FilterList";

const Navbar = ({ handleInput, searchTerm }) => {
  return (
    <div className="navbar">
      <Searchbox handleInput={handleInput} searchTerm={searchTerm} />
      <FilterList />
    </div>
  );
};

export default Navbar;

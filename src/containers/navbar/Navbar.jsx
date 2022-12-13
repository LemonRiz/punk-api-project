import React from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./NavBar.scss";
import FilterList from "../../components/FilterList/FilterList";
import RangeInput from "../../components/RangeInput/RangeInput";

const Navbar = ({ handleInput, searchTerm, filterChoice, setFilterChoice }) => {
  return (
    <div className="navbar">
      <RangeInput className="navbar__range" min={5} max={80}/>
      <p className="navbar__text">Search:</p>
      <Searchbox handleInput={handleInput} searchTerm={searchTerm} />
      <FilterList
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
    </div>
  );
};

export default Navbar;

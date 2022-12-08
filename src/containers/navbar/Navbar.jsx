import React from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./NavBar.scss";

const Navbar = ({ handleInput, searchTerm }) => {
  return (
    <div className="navbar">
      <Searchbox handleInput={handleInput} searchTerm={searchTerm} />
    </div>
  );
};

export default Navbar;

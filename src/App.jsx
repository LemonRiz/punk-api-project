import "./App.scss";
import { React, useState } from "react";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";
import beers from "./data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beers.filter((search) => {
    const beersLower = search.name.toLowerCase();
    return beersLower.includes(searchTerm);
  });

  return (
    <div className="render">
      <h1>Punk API</h1>
      <div className="booze">
        <NavBar
          className="booze__nav"
          label="search"
          handleInput={handleInput}
          searchTerm={searchTerm}
        />
        <Main beers={filteredBeers} />
      </div>
    </div>
  );
};

export default App;

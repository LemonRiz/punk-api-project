import "./App.scss";
import { React, useState, useEffect } from "react";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";
import beers from "./data";

const App = () => {
  const [beerList, setBeerList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterChoice, setFilterChoice] = useState("");
  const [acidity, setAcidity] = useState(false);

  const getBeers = async () => {
    let url = "";
    if (filterChoice == "High ABV") {
      url = `https://api.punkapi.com/v2/beers?abv_gt=6`;
    } else if (filterChoice == "Classic Range") {
      url = `https://api.punkapi.com/v2/beers?brewed_before=12-2010`;
    } else {
      url = `https://api.punkapi.com/v2/beers`;
    }

    const result = await fetch(url);
    const beerData = await result.json();
    setBeerList(beerData);
  };

  useEffect(() => {
    getBeers();
  }, [filterChoice, acidity]);
  console.log(beerList);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beerList.filter((search) => {
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
          filterChoice={filterChoice}
          setFilterChoice={setFilterChoice}
        />
        <Main beers={filteredBeers} />
      </div>
    </div>
  );
};
export default App;

import "./App.scss";
import { React, useState, useEffect } from "react";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";
import beers from "./data";

const App = () => {
  const [beerList, setBeerList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterChoice, setFilterChoice] = useState("");
  const [numberBeers, setNumberBeers] = useState([25]);
  const [acidity, setAcidity] = useState(false);

  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers?";
    if (filterChoice == "High ABV") {
      url += `&abv_gt=6`;
    } else if (filterChoice == "Classic Range") {
      url += `&brewed_before=12-2010`;
    }

    const result = await fetch(url);
    const beerData = await result.json();
    setBeerList(beerData);

    if (filterChoice == "High Acidity") {
      const highAcidBeer = beerData.filter((beer) => {
        const phBeer = beer.ph < 4;
        return phBeer;
      });
      setBeerList(highAcidBeer);
    } else {
      setBeerList(beerData);
    }
  };

  useEffect(() => {
    getBeers();
  }, [filterChoice]);
  console.log(beerList);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleChange = (event) => {
    setNumberBeers(event.target.value);
  };

  const filteredBeers = beerList.filter((search) => {
    const beersLower = search.name.toLowerCase();
    return beersLower.includes(searchTerm);
  });

  return (
    <div className="render">
      <h1>Punk API</h1>
      <NavBar
        className="nav"
        label="search"
        handleInput={handleInput}
        searchTerm={searchTerm}
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      <div className="booze">
        <Main className="booze__main" beers={filteredBeers} />
      </div>
    </div>
  );
};
export default App;

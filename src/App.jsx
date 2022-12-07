import "./App.css";
import { React, useState } from "react";
import Navbar from "./containers/navbar/Navbar";
import CardList from "./components/CardList/CardList";
import Main from "./containers/Main/Main";
import Beers from "./data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Main />
      <Navbar label="search"/>
      <CardList />
    </div>
  );
};

export default App;

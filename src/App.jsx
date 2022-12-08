import "./App.css";
import { React, useState } from "react";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="render">
      <h1>Punk API</h1>
      <NavBar className="render__nav" label="search" />
      <Main className="render__main" />
    </div>
  );
};

export default App;

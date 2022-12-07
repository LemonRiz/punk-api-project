import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";
import Beers from "../../data";

const CardList = () => {
  return (
    <div>
      <Card name={Beers.name} />
    </div>
  );
};

export default CardList;

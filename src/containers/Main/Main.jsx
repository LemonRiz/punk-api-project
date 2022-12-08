import React from "react";
import "./Main.scss";
import Card from "./../../components/Card/Card";
import beer from "../../data";

const Main = () => {
  const beers = beer.map((drinks) => {
    return (
      <Card
        id={drinks.id}
        name={drinks.name}
        image={drinks.image_url}
        info={drinks.description}
      />
    );
  });
  return { beers };
};

export default Main;

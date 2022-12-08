import React from "react";
import "./Main.scss";
import Card from "./../../components/Card/Card";
import beer from "../../data";

const Main = () => {
  const beers = beer.map((drinks) => {
    return (
      <Card
        key={drinks.id}
        name={drinks.name}
        image={drinks.image_url}
        info={drinks.description}
        first_brewed={drinks.first_brewed}
        abv={drinks.abv}
        ph={drinks.ph}
      />
    );
  });
  return <div className="alcohols">{beers}</div>;
};

export default Main;

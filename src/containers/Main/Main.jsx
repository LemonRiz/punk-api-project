import React from "react";
import "./Main.scss";
import Card from "./../../components/Card/Card";

const Main = ({beers}) => {
  const beersJSX = beers.map((drinks) => {
    return (
      <Card className="beergrid"
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
  return <div className="alcohols">{beersJSX}</div>;
};

export default Main;

import React from "react";
import "./Card.scss";

const Card = ({ name, image, info, first_brewed, abv, ph }) => {
  return (
    <div className="beerCard">
      <img className="beerCard_img" src={image} />
      <h2 className="beerCard__name">{name}</h2>
      <p className="beerCard__info">{info}</p>
      <p>First Brewed: {first_brewed}</p>
      <p>ABV: {abv}</p>
      <p>pH: {ph}</p>
    </div>
  );
};

export default Card;

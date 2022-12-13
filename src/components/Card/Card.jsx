import React from "react";
import "./Card.scss";

const Card = ({ name, image, info, first_brewed, abv, ph }) => {
  return (
    <div className="beerCard">
      <img className="beerCard_img" src={image} />
      <h2 className="beerCard__name">{name}</h2>
      <p className="beerCard__info">{info}</p>
      <ul>
        <li>First Brewed: {first_brewed}</li>
        <li>ABV: {abv}</li>
        <li>pH: {ph}</li>
      </ul>
    </div>
  );
};

export default Card;

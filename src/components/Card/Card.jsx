import React from "react";
import "./Card.scss";

const Card = ({ name, image, info }) => {
  return (
    <div className="beerCard">
      <img className="beerCard_ing" src={image} />
      <h2 className="beerCard__name">{name}</h2>
      <p className="beerCard__info">{info}</p>
    </div>
  );
};

export default Card;

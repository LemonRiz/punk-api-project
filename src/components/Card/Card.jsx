import React from "react";
import "./Card.scss";

const Card = ({ name, image, info, id}) => {
  return (
    <div className="beerCard" key={id}>
      <img className="beerCard_img" src={image} />
      <h2 className="beerCard__name">{name}</h2>
      <p className="beerCard__info">{info}</p>
    </div>
  );
};

export default Card;

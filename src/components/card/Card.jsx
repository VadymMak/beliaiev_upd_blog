import React from "react";

import "./Card.css";

const Card = ({ id, img_sm, IMG, title, desc }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: { img_sm },
          objectFit: "cover",
          objectPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={IMG} alt="cardImg" />
      </div>
      <div className="card-description">
        <div className="card-title">
          <h1>{title}</h1>
        </div>
        <div className="card-text">
          <h3>{desc}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;

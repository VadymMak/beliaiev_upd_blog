import React from "react";

import Card from "../card/Card";

import "./Services.css";
import { localization } from "../../constants/localization";
import { card } from "../../constants/card-content.js";

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>{localization.title.plessure}</h1>
        {card.map((content) => (
          <Card key={content.id} {...content} />
        ))}
      </div>
    </div>
  );
};

export default Services;

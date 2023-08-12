import React from "react";

import "./ServiceCard.css";

const ServiceCard = ({ id, title }) => {
  return (
    <div className="service-card">
      <i className="fa fa-check-circle"></i>
      <h3>{title}</h3>
    </div>
  );
};

export default ServiceCard;

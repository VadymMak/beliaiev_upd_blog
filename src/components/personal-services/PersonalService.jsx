import React from "react";

import "./PersonalServices.css";

import ServiceCard from "../service-card/ServiceCard";

import { localization } from "../../constants/localization";

const PersonalService = () => {
  return (
    <div className="personal">
      <div className="personal-header">
        <img src="images/carpat_1200_resized.png" alt="carpat_mountain" />
      </div>
      <div className="personal-description">
        <div className="personal-description__title">
          <h1>{localization.title.service}</h1>
        </div>
        <div className="personal-description__description">
          {localization.content.map((desc) => (
            <ServiceCard key={desc.id} {...desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalService;

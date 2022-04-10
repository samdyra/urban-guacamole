import React from "react";
import "./FeaturesStyle.css";
import constant from "../../constant/descriptions.json";

const Features = () => {
  return (
    <div className="feature-screen-container" id="features">
      <div className="title-features-container">
        <div className="featureTitle-container">
          <p>Newest Features</p>
        </div>
        <div className="feature-container">
          <div className="UHIfeature-container">
            <img></img>
            <a href="/UHIScreen">UHI Map</a>
            <p>{constant.UHIDescription}</p>
          </div>
          <div className="RTRWfeature-container">
            <img></img>
            <a href="/RTRWScreen">RTRW Zoning Map</a>
            <p>{constant.RTRWDescription}</p>
          </div>
          <div className="Netizenfeature-container">
            <img></img>
            <a href="/NetizenScreen">Netizen Contribution</a>
            <p>{constant.NetizenDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import "./FeaturesStyle.css";
import constant from "../../constant/descriptions.json";

const Features = () => {
  return (
    <div className="feature-screen-container">
      <div className="title-features-container">
        <div className="featureTitle-container">
          <p>Newest Features</p>
        </div>
        <div className="feature-container">
          <div className="UHIfeature-container">
            <img></img>
            <h2>UHI Map</h2>
            <p>{constant.UHIDescription}</p>
          </div>
          <div className="RTRWfeature-container">
            <img></img>
            <h2>RTRW Zoning Map</h2>
            <p>{constant.RTRWDescription}</p>
          </div>
          <div className="Netizenfeature-container">
            <img></img>
            <h2>Netizen Contribution</h2>
            <p>{constant.NetizenDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

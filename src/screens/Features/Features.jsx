import React from "react";
import "./FeaturesStyle.css";
import constant from "../../constant/descriptions.json";
import UHIMap from "../../images/UHIMap.png";
import RTRW from "../../images/RTRW.png";
import netizen from "../../images/Netizen.png";

const Features = () => {
  return (
    <div className="feature-screen-container">
      <div className="title-features-container">
        <div className="featureTitle-container">
          <p>Newest Features</p>
        </div>
        <div className="feature-container">
          <div className="UHIfeature-container">
            <img src={UHIMap}></img>
            <a href="/UHIScreen">UHI Map</a>
            <p>{constant.UHIDescription}</p>
          </div>
          <div className="RTRWfeature-container">
            <img src={RTRW}></img>
            <a href="/RTRWScreen">RTRW Zoning Map</a>
            <p>{constant.RTRWDescription}</p>
          </div>
          <div className="Netizenfeature-container">
            <img src={netizen}></img>
            <a href="/NetizenScreen">Netizen Contribution</a>
            <p>{constant.NetizenDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import "./FeaturesStyle.css";
import constant from "../../constant/descriptions.json";
import uhiex from "../../images/uhiex.png"
import chartex from "../../images/chartex.png"
import peopleex from "../../images/peopleex.png"


const Features = () => {
  return (
    <div className="feature-screen-container">
      <div className="title-features-container">
        <div className="featureTitle-container">
          <p>Newest Features</p>
        </div>
        <div className="feature-container">
          <div className="UHIfeature-container">
            <img src={uhiex}></img>
            <a href="/UHIScreen">UHI Map</a>
            <p>{constant.UHIDescription}</p>
          </div>
          <div className="RTRWfeature-container">
            <img src={chartex}></img>
            <a href="/Chart">Statistics</a>
            <p>{constant.RTRWDescription}</p>
          </div>
          <div className="Netizenfeature-container">
            <img src={peopleex}></img>
            <a href="/NetizenScreen">People Contributions</a>
            <p>{constant.NetizenDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import "./HomeScreen.css";
import landingpagelogo from "../../images/landingpagelogo.png";
import constant from "../../constant/descriptions.json";

const HomeScreen = () => {
  return (
    <div className="home-screen-container">
      <div className="logo-title-desc-container">
        <div className="title-desc-container">
          <div className="title-container">GEOLOKA</div>
          <div className="desc-container" style={{ maxWidth: "400px" }}>
            <p>{constant.homeDescription}</p>
          </div>
          <img src={landingpagelogo}></img>
        </div>
        <div className="facts-wrapper">
          <div className="facts-title-container">
            <div className="facts-title">What is Urban Heat Island</div>
          </div>
          <div className="desc-container">asdasdsaqweqweqweqweqweqweqwe</div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

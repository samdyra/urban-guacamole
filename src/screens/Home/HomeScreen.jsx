import React from "react";
import "./HomeScreen.css";
import NavBar from "../../components/Navbar/NavBar";
import geolokaLogo from "../../images/GeolokaLogo.png";
import constant from "../../constant/descriptions.json";

const HomeScreen = () => {
  return (
    <div className="home-screen-container">
      <div className="logo-title-desc-container">
        <img src={geolokaLogo}></img>
        <div className="title-desc-container">
          <div className="title-container">
            <h1>GEOLOKA</h1>
          </div>
          <div className="desc-container">
            <p>{constant.homeDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

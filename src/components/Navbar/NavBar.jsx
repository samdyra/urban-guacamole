import React from "react";
import geolokaLogo from "../../images/GeolokaLogo.png";
import "./NavBarStyle.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-element">
        <div className="geoloka-logo-container">
          <img src={geolokaLogo} className="geoloka-logo"></img>
        </div>
        <div className="link-container">
          <a>HOME</a>
          <a>CONTACT US</a>
          <a>ABOUT US</a>
          <a>FEATURES</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

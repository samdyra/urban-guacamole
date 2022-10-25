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
          <a href="/">Home</a>
          <a href="/UHIScreen">UHI Map</a>
          <a href="/RTRWScreen">RDTR Zoning Map</a>
          <a href="/Chart">Statistics</a>
          <a href="/NetizenScreen">Netizen Contribution</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

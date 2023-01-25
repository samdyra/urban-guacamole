import React from "react";
import geolokaLogo from "../../images/GeolokaLogo.png";
import "./NavBarStyle.css";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  const isForm = location.pathname.includes("Form");

  return (
    <div className="nav-container">
      <div className="nav-element">
        <div className="geoloka-logo-container">
          <img src={geolokaLogo} className="geoloka-logo"></img>
        </div>
        <div className="link-container">
          <a href="/">Home</a>
          <a href="/UHIScreen">UHI Map</a>
          {/* <a href="/RTRWScreen">RDTR Zoning Map</a> */}
          <a href="/Chart">Statistics</a>
          <a href="/NetizenScreen">People Contribution</a>
          <a href="/Login">Login</a>
          <a href="/FormScreen">Form</a>
          <a href="/DetailPage">DetailPage</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

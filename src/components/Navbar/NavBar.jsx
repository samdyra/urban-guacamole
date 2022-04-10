import React from "react";
import geolokaLogo from "../../images/GeolokaLogo.png";
import "./NavBarStyle.css";
import { Anchor } from "antd";

const { Link } = Anchor;

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-element">
        <div className="geoloka-logo-container">
          <img src={geolokaLogo} className="geoloka-logo"></img>
        </div>
        <div className="link-container">
          <a href="/">HOME</a>
          <a>CONTACT US</a>
          <a>ABOUT US</a>
          <Anchor>
            <Link href="#features" title="feature"></Link>
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

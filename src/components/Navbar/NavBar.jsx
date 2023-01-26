import React, { useState } from "react";
import geolokaLogo from "../../images/GeolokaLogo.png";
import "./NavBarStyle.css";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  const isForm = location.pathname.includes("Form");

  //hamburfer menu
  const [burger_class, setBurgerClass] = useState("burgerbar");
  const [menu_class, setMenuClass] = useState("menuHidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burgerbar2");
      setMenuClass("menuVisible");
    } else {
      setBurgerClass("burgerbarunclicked");
      setMenuClass("menuHidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const ScreenWidth = window.innerWidth;
  const isMobile = ScreenWidth <= 500;

  return (
    <div className="nav-container">
      <div className="nav-element">
        <div className="geoloka-logo-container">
          <img src={geolokaLogo} className="geoloka-logo"></img>
        </div>
        {!isMobile ? (
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
        ) : (
          <div className="nav">
            <div className="burgermenu" onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className={menu_class} onClick={() => setIsMenuClicked(true)}>
          <a href="/">Home</a>
          {/* <a href="/DetailPage">Wiki</a> */}
          <a href="/UHIScreen">UHI Map</a>
          {/* <a href="/RTRWScreen">RDTR Zoning Map</a> */}
          <a href="/Chart">Statistics</a>
          <a href="/NetizenScreen">People Contribution</a>
          {/* <a href="/Login">Login</a> */}
          <a href="/FormScreen">Quiz</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

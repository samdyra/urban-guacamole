import React from "react";
import lineImage from "../../images/footerLine.png";
import "./Footer.css";
import constant from "../../constant/descriptions.json";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="our-container">
          <a>ABOUT US</a>
          <a>OUR PRODUCT</a>
          <a>CONTACT US</a>
        </div>
        <div className="line-image">
          <img src={lineImage}></img>
        </div>
        <div className="copyright-container">
          <p>{constant.copyright}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

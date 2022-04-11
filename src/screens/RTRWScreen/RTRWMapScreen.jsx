import React from "react";
import "./RTRWMapScreen.css";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import whatsapp from "../../images/whatsapp.png";
import constant from "../../constant/descriptions.json";

const RTRWMapScreen = () => {
  return (
    <div className="RTRWMapScreen-container">
      <div className="RTRW-legend-map-container">
        <div className="RTRW-legend-container">
          {/* RTRW Title */}
          <div className="RTRW-legend-title-container">
            <h1>RTRW Zoning Map</h1>
            <p>Scale 1:10000</p>
            <h2>Cirebon City</h2>
          </div>
          {/* RTRW Title End */}
          {/* RTRW Data */}
          <div className="RTRW-data-container">
            <div className="RTRW-data-title">
              <h1>Data Attributes</h1>
            </div>
            <div className="RTRW-data">
              <div className="RTRW-data-content">
                <p>Kecamatan:</p>
                <p>Desa:</p>
                <p>Population:</p>
                <p>Land Use/Land Cover:</p>
              </div>
              <div className="RTRW-data-items">
                <p>Cibeunying Kidul</p>
                <p>Nambo</p>
                <p>120000</p>
                <p>Urban</p>
              </div>
            </div>
          </div>
          {/* RTRW Data End*/}
          {/* RTRW Legend*/}
          <div className="RTRW-legend-container">
            <div className="RTRW-legend-title">
              <h1>Data Attributes</h1>
            </div>
            <div className="RTRW-legend">
              <div className="RTRW-legend-content">
                <p>Urban</p>
                <p>Vegetation</p>
                <p>River</p>
                <p>Ricefield</p>
                <p>Roads</p>
                <p>Bare Lands</p>
                <p>Bushes</p>
                <p>Forest</p>
              </div>
              <div className="RTRW-legend-items">
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
              </div>
            </div>
          </div>
          {/* RTRW Legend End*/}
          {/* RTRW Layer */}
          <div className="RTRW-layer-container">
            <div className="RTRW-layer-title">
              <h1>Layer Control</h1>
            </div>
            <div className="RTRW-layer">
              <div className="RTRW-layer-content">
                <p>Urban</p>
                <p>Vegetation</p>
                <p>River</p>
                <p>Ricefield</p>
                <p>Roads</p>
                <p>Bare Lands</p>
                <p>Bushes</p>
                <p>Forest</p>
              </div>
              <div className="RTRW-layer-items">
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
                <p>X</p>
              </div>
            </div>
          </div>
          {/* RTRW Layer End */}
          {/* RTRW Footer  */}
          <div className="UHIFooter-container">
            <div className="UHIFooter-element-container">
              <div className="UHIFooter-about-us-container">
                <img className="UHIFooter-logo"></img>
                <p>ABOUT US</p>
              </div>
              <div className="UHIFooter-contact">
                <p>CONTACT</p>
                <div className="UHIFooter-contact-logo">
                  <img src={facebook}></img>
                  <img src={linkedin}></img>
                  <img src={instagram}></img>
                  <img src={whatsapp}></img>
                </div>
              </div>
            </div>
            <div className="UHIFooter-copyright">
              <p>{constant.copyright}</p>
            </div>
          </div>
          {/* RTRW Footer End  */}
        </div>
        <div className="RTRW-map-container"></div>
      </div>
    </div>
  );
};

export default RTRWMapScreen;

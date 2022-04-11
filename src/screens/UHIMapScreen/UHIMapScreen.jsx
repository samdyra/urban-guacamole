import React from "react";
import "./UHIMapScreenStyle.css";
import constant from "../../constant/descriptions.json";
import UHIconstant from "../../constant/UHIDesc.json";
import impsur from "../../images/ImperSurface.png";
import nightlight from "../../images/NightLight.png";
import NDVI from "../../images/NDVI.png";
import antro from "../../images/AntroHeat.png";
import geolokaLogo from "../../images/GeolokaLogo.png";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import whatsapp from "../../images/whatsapp.png";

const UHIMapScreen = () => {
  return (
    <div className="UHIMap-container">
      {/* UHI Legend Start */}
      <div className="UHIMap-Legend-container">
        <div className="UHILegend-container">
          <h1>UHI Map</h1>
          <h3>Cirebon City</h3>
          <h2>23 C</h2>
          <div className="UHIparameter-container">
            <div className="impsur-container">
              <img src={impsur}></img>
              <h3>{UHIconstant.imper}</h3>
            </div>
            <div className="nightlight-container">
              <img src={nightlight}></img>
              <h3>{UHIconstant.nightlight}</h3>
            </div>
            <div className="NDVI-container">
              <img src={NDVI}></img>
              <h3>{UHIconstant.NDVI}</h3>
            </div>
            <div className="antro-container">
              <img src={antro}></img>
              <h3>{UHIconstant.antro}</h3>
            </div>
          </div>
          <div className="UHIinfo-container">
            <h1>More information on selected area : </h1>
            <div className="UHIKeterangan-container">
              <div className="UHIKeterangan-judul">
                <p>Kecamatan</p>
                <p>Desa</p>
                <p>Population</p>
                <p>Land Use/Land Cover</p>
              </div>
              <div className="UHIKeterangan-content">
                <p>Cibeunying Kidul</p>
                <p>Nambo</p>
                <p>120000</p>
                <p>Urban</p>
              </div>
            </div>
          </div>
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
        </div>
        <div className="UHIMap-container"></div>
      </div>
    </div>
  );
};

export default UHIMapScreen;

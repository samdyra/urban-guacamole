import React from "react";
import { MapContainer, TileLayer, GeoJSON, ScaleControl } from "react-leaflet";
import "./NetizenScreenStyle.css";
import geolokaLogo from "../../images/GeolokaLogo.png";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import whatsapp from "../../images/whatsapp.png";
import footerLine from "../../images/miniFooterLine.png";
import constant from "../../constant/descriptions.json";

const NetizenScreen = () => {
  return (
    <div className="netizen-container">
      <div className="netizen-legend-map-container">
        <div className="netizen-legend-container">
          {/* Netizen Title */}
          <div className="netizen-title">
            <h1>HOT TWEETS</h1>
            <h2>Cirebon City</h2>
            <p>Tweets on selected area:</p>
            <h3>12 tweets found!</h3>
          </div>
          {/* Netizen Title End */}
          {/* Netizen tag */}
          <div className="netizen-tag">
            <div className="hot">
              <p>hot</p>
              <div>x</div>
            </div>
            <div className="pollution">
              <p>pollution</p>
              <div>x</div>
            </div>
            <div className="temperature">
              <p>temperature</p>
              <div>x</div>
            </div>
            <div className="add-edit">
              <p>add/edit</p>
            </div>
          </div>
          {/* Netizen tag end*/}
          {/* Netizen Tweets*/}
          <div className="twitter-container">
            <div className="account-container">
              <div className="twitter-image">
                <img></img>
              </div>
              <div className="twitter-content">
                <div className="twitter-name">
                  <p>Dwiputra Sam</p>
                  <p>@dwp_sam</p>
                </div>
                <div className="tweet">
                  <p>I dont remember IPDNs canteen being this hot?</p>
                </div>
              </div>
            </div>
          </div>
          {/* Netizen Tweets End*/}
          {/* Netizen Tweets logo*/}
          <div className="tweets-logo">
            <img></img>
          </div>
        </div>
        {/* Netizen Tweets logo End */}
        {/* UHI Legend Footer */}
        <div className="UHIFooter-container">
          <div className="UHIFooter-element-container">
            <div className="UHIFooter-about-us-container">
              <img className="UHIFooter-logo" src={geolokaLogo}></img>
              <p>ABOUT US</p>
            </div>
            <div className="UHIFooter-contact">
              <p>CONTACT</p>
              <div className="UHIFooter-contact-logo">
                <div className="UHIFooter-fb-linkedin">
                  <img src={facebook}></img>
                  <img src={linkedin}></img>
                </div>
                <div className="UHIFooter-ig-wa">
                  <img src={instagram}></img>
                  <img src={whatsapp}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="UHIFooter-line">
            <img src={footerLine}></img>
          </div>
          <div className="UHIFooter-copyright">
            <p>{constant.copyright}</p>
          </div>
        </div>
        {/* UHI Legend Footer End */}
      </div>

      <div className="netizen-map-container">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{
            height: "100%",
            position: "relative",
            zIndex: 0,
            boxShadow: "-2px 3px 5px 0 rgba(0,.9,0,.4)",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default NetizenScreen;

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "./NetizenScreenStyle.css";
import geolokaLogo from "../../images/GeolokaLogo.png";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import whatsapp from "../../images/whatsapp.png";
import footerLine from "../../images/miniFooterLine.png";
import constant from "../../constant/descriptions.json";
import Tweet from "../../components/Tweet/Tweet";
import { mockUserData } from "../../constant/mockUserData";
import { MinimapControl } from "../../components/minimap/miniMap";
import {
  query,
  collection,
  onSnapshot,
  limit,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index";

const NetizenScreen = () => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    const storyRef = collection(db, "temperature");
    const q = query(storyRef, orderBy("datems"));
    onSnapshot(q, (snapshot) => {
      const story = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStory(story);
    });
  }, []);
  console.log(story);
  return (
    <div className="netizen-container">
      <div className="netizen-legend-map-container">
        <div className="netizen-legend-container">
          {/* Netizen Title */}
          <div className="netizen-title">
            <h1>PEOPLE CONTRIBUTIONS</h1>
            <h2>Bali City</h2>
            <p>Reports on selected area:</p>
            <h3>{story.length} Reports found!</h3>
          </div>
          {/* Netizen Title End */}
          {/* Netizen tag */}
          <div className="netizen-tag">
            <div className="hot">
              <p>
                Contribute Data From you area{" "}
                <u style={{ textStyle: "underline" }}>here!</u>
              </p>
            </div>
          </div>
          {/* Netizen tag end*/}
          {/* Netizen Tweets*/}
          <div>
            {story &&
              story.slice(0, 5).map((data) => {
                return <Tweet data={data}></Tweet>;
              })}
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
          center={[-8.7893678, 115.1792761]}
          zoom={13}
          style={{
            height: "100%",
            position: "relative",
            zIndex: 0,
            boxShadow: "-2px 3px 5px 0 rgba(0,.9,0,.4)",
          }}
        >
          {story &&
            story.map((data) => {
              return (
                <>
                  <CircleMarker
                    center={[data.latitude, data.longitude]}
                    radius={data.accuracy * 2}
                    fillColor={"red"}
                    weight={0}
                  >
                    <Popup>
                      <Tweet data={data}></Tweet>
                    </Popup>
                  </CircleMarker>
                  <Marker position={[data.latitude, data.longitude]}></Marker>
                </>
              );
            })}
          {/* {story &&
            story.map((data) => {
              return (
                
              );
            })} */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MinimapControl />
        </MapContainer>
      </div>
    </div>
  );
};

export default NetizenScreen;

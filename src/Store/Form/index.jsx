import React from "react";
import { useState, useEffect, useRef } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteStory from "./DeleteIsuKampus";
import AddStory from "./AddIsuKampus";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import { useMap } from "react-leaflet";

const Map = ({ latitude, longitude }) => {
  const map = useMap();

  useEffect(() => {
    map.panTo([latitude, longitude]);
  }, [latitude, longitude]);

  return;
};

const Stories = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [acc, setAcc] = useState(0);
  const [story, setStory] = useState([]);

  useEffect(() => {
    const storyRef = collection(db, "isuKampus");
    const q = query(storyRef);
    onSnapshot(q, (snapshot) => {
      const story = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStory(story);
    });
  }, []);

  const pressMap = () =>
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  const successCallback = ({ coords }) => {
    const { latitude, longitude, accuracy } = coords;
    console.log(coords)
    setLatitude(latitude);
    setLongitude(longitude);
    setAcc(accuracy);
  };

  const errorCallback = (error) => {
    alert(error);
  };

  return (
    <div className="testContainer">
      <MapContainer
        center={[0, 0]}
        zoom={16}
        style={{
          height: "320px",
          width: "320px",
          position: "relative",
          zIndex: 0,
          boxShadow: "-2px 3px 5px 0 rgba(0,.9,0,.4)",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      >
        <Map latitude={latitude} longitude={longitude}></Map>
        <Marker position={[latitude, longitude]}></Marker>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <button className="formbutton2" onClick={pressMap}>
        Locate
      </button>
      <div>
        <AddStory
        latitude={latitude} longitude={longitude} acc={acc}
        ></AddStory>
      </div>
    </div>
  );
};

export default Stories;

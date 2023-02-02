import React, { useEffect, useState } from "react";
import "./UHIMapScreenStyle.css";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import constant from "../../constant/descriptions.json";
import UHIconstant from "../../constant/UHIDesc.json";
import impsur from "../../images/ImperSurface.png";
import nightlight from "../../images/NightLight.png";
import NDVI from "../../images/NDVI.png";
import antro from "../../images/AntroHeat.png";
import geolokaLogo from "../../images/LogoGeoloka3.png";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import whatsapp from "../../images/whatsapp.png";
import footerLine from "../../images/miniFooterLine.png";
import data2021 from "../../Shapefiles/cirebon2021.json";
import Modal from "../../components/Modal/Modal";
import paramsDesc from "../../constant/paramsDesc.json";
import { MinimapControl } from "../../components/minimap/miniMap";
import * as ReactDOMServer from "react-dom/server";

const UHIMapScreen = () => {
  const [uhiValue, setUhiValue] = useState("");
  const [nightLightValue, setNightLightValue] = useState("");
  const [ndbiValue, setNdbiValue] = useState("");
  const [ndviValue, setNdviValue] = useState("");
  const [kelurahanValue, setKelurahanValue] = useState("-");
  const [kecamatanValue, setKecamatanValue] = useState("-");
  const [areaValue, setAreaValue] = useState("-");
  const [modal, setModal] = useState(false);
  const [NDBImodal, setNDBIModal] = useState(false);
  const [NLmodal, setNLModal] = useState(false);
  const [NDVImodal, setNDVIModal] = useState(false);
  const [UHImodal, setUHIModal] = useState(false);

  // NDBI Modal
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const Popup = ({ feature }) => {
    const uhiValue = feature.properties.LST;
    const ndbiIndexHigh = feature.properties.NDBI > 0 

    let uhiLevel =
      uhiValue < 34
        ? 0
        : uhiValue >= 34 && uhiValue < 34.4
        ? 1
        : uhiValue >= 34.4 && uhiValue < 34.8
        ? 2
        : 3;

    let uhiDesc = "UHI Level in this area is not significant"
    if (uhiLevel != 0) {
      if (uhiLevel == 1 && ndbiIndexHigh) {
        uhiDesc = "Green roofs"
      }
      if (uhiLevel == 2 && ndbiIndexHigh) {
        uhiDesc = "Green roofs, cool roofs"
      }
      if (uhiLevel == 3 && ndbiIndexHigh) {
        uhiDesc = "Green roofs, cool roofs, and cool pavements"
      }
      if (uhiLevel == 1 && !ndbiIndexHigh) {
        uhiDesc = "Green infrastructure"
      }
      if (uhiLevel == 2 && !ndbiIndexHigh) {
        uhiDesc = "Green infrastructure"
      }
      if (uhiLevel == 3 && !ndbiIndexHigh) {
        uhiDesc = "Green infrastructure, cool pavements"
      }
    }

    return (
      <div>
        <h2>Measure Categories</h2>
        {uhiDesc}
      </div>
    );
  };

  // NDBI Modal End

  // NDBI Modal
  const toggleNDBIModal = () => {
    setNDBIModal(!NDBImodal);
  };

  if (NDBImodal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // NDBI Modal End
  // Night Light Modal
  const toggleNLModal = () => {
    setNLModal(!NLmodal);
  };

  if (NLmodal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // Night Light Modal End

  // NDVI Modal
  const toggleNDVIModal = () => {
    setNDVIModal(!NDVImodal);
  };

  if (NDVImodal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // NDVI Modal End

  // UHI Modal
  const toggleUHIModal = () => {
    setUHIModal(!UHImodal);
  };

  if (UHImodal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // UHI Modal End

  // Styling functions

  const getColor = (d) => {
    return d == 32.5
      ? "rgb(0, 169, 11)"
      : d >= 32.5 && d <= 33.0
      ? "rgb(4, 215, 71)"
      : d >= 33.0 && d <= 33.5
      ? "rgb(255, 217, 0)"
      : d >= 33.5 && d <= 34.0
      ? "rgb(255, 171, 3)"
      : d >= 34.0 && d <= 35.5
      ? "rgb(226, 1, 1)"
      : "";
  };

  const style = (feature) => {
    return {
      fillColor: getColor(feature.properties.LST),
      weight: 0.8,
      opacity: 1,
      border: "solid",
      color: "rgb(110,110,110)",
      dashArray: "",
      fillOpacity: 0.6,
    };
  };

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      fillOpacity: 0.8,
      weight: 2,
    });
  }

  function resetHighlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      fillOpacity: 0.6,
      weight: 0.8,
    });
  }

  // Styling functions End

  //geojson logic

  const onEachPolygons = (feature, layer) => {
    const uhiValue = feature.properties.LST;
    const nightLightValue = feature.properties.NL;
    const ndbiValue = feature.properties.NDBI;
    const ndviValue = feature.properties.NDVI;
    const kelurahanValue = feature.properties.Kelurahan;
    const kecamatanValue = feature.properties.WADMKC;
    const areaValue = feature.properties.NAMOBJ;
    function paramsFunc() {
      setUhiValue(uhiValue);
      setNightLightValue(nightLightValue);
      setNdbiValue(ndbiValue);
      setNdviValue(ndviValue);
      setKelurahanValue(kelurahanValue);
      setKecamatanValue(kecamatanValue);
      setAreaValue(areaValue);
    }

    const popupContent = ReactDOMServer.renderToString(
      <Popup feature={feature} />
    );
    layer.bindPopup(popupContent);

    layer.on({
      click: (e) => {
        paramsFunc();
      },
      mouseover: highlightFeature,
      mouseout: resetHighlightFeature,
    });
  };

  //geojson logic end

  // init function logic
  const initFunction = () => {
    toggleModal();
    setUhiValue("34.96");
    setNightLightValue("13.517");
    setNdbiValue("24.974");
    setNdviValue("0.234");
    setKelurahanValue("Harjamukti");
    setKecamatanValue("Kejaksan");
    setAreaValue("Kebonbaru");
  };

  useEffect(() => {
    initFunction();
  }, []);

  // init function logic end

  return (
    <div className="UHIMap-container">
      <div className="UHIMap-Legend-container">
        {modal && (
          <Modal
            title="Welcome!"
            toggleModal={toggleModal}
            desc="Please click one of the polygons on the map to see the statistics on the left!"
          ></Modal>
        )}
        <div className="UHILegend-container">
          {/* UHI Legend Title*/}
          <div className="UHI-title">
            <h1>UHI MAP</h1>
            <h3>Cirebon City</h3>
            <h4>UHI Value in selected area :</h4>
            <h2>{`${Math.round(uhiValue * 1000) / 1000} C`}</h2>
          </div>
          {/* UHI Legend Title End*/}
          {/* UHI Legend Param */}
          <div className="UHIparameter-container">
            <div className="imp-night-container">
              <div className="impsur-container" onClick={toggleNDBIModal}>
                {NDBImodal && (
                  <Modal
                    title="What is NDBI?"
                    toggleModal={toggleNDBIModal}
                    desc={paramsDesc.NDBIDesc}
                  ></Modal>
                )}
                <img src={impsur}></img>
                <h3>
                  {UHIconstant.imper} {`${Math.round(ndbiValue * 1000) / 1000}`}
                </h3>
                <h2>NDBI</h2>
              </div>
              <div className="nightlight-container" onClick={toggleNLModal}>
                {NLmodal && (
                  <Modal
                    title="What is Night Light?"
                    toggleModal={toggleNLModal}
                    desc={paramsDesc.NLDesc}
                  ></Modal>
                )}
                <img src={nightlight}></img>
                <h3>
                  {UHIconstant.nightlight}
                  {`${Math.round(nightLightValue * 1000) / 1000}`}
                </h3>
                <h2>Night Light</h2>
              </div>
            </div>
            <div className="NDVI-antro-container">
              <div className="NDVI-container" onClick={toggleNDVIModal}>
                {NDVImodal && (
                  <Modal
                    title="What is NDVI?"
                    toggleModal={toggleNDVIModal}
                    desc={paramsDesc.NDVIDesc}
                  ></Modal>
                )}
                <img src={NDVI}></img>
                <h3>
                  {UHIconstant.NDVI} {`${Math.round(ndviValue * 1000) / 1000}`}
                </h3>
                <h2>NDVI</h2>
              </div>
              <div className="antro-container" onClick={toggleUHIModal}>
                {UHImodal && (
                  <Modal
                    title="What is UHI?"
                    toggleModal={toggleUHIModal}
                    desc={paramsDesc.UHIDesc}
                  ></Modal>
                )}
                <img src={antro}></img>
                <h3>
                  {UHIconstant.antro} {`${Math.round(uhiValue * 1000) / 1000}`}
                </h3>
                <h2>Urban Heat Island</h2>
              </div>
            </div>
          </div>
          {/* UHI Legend Param End */}
          {/* UHI Legend Info  */}
          <div className="UHIinfo-container">
            <h1>More information on selected area : </h1>
            <div className="UHIKeterangan-container">
              <div className="UHIKeterangan-judul">
                <p>Kelurahan :</p>
                <p>Kecamatan :</p>
                <p>City :</p>
                <p>Desa :</p>
              </div>
              <div className="UHIKeterangan-content">
                <p>{kelurahanValue}</p>
                <p>{kecamatanValue}</p>
                <p>Kota Cirebon</p>
                <p>{areaValue}</p>
              </div>
            </div>
          </div>
          {/* UHI Legend Info End */}
          {/* Legends Start */}
          <div className="UHI-chloropeth-container">
            <div className="UHI-Chloropeth-title">
              <h1>Legend</h1>
            </div>
            <div className="UHI-chloropeth-legend">
              <div className="UHI-chloropeth-content">
                <div className="chloropeth-container">
                  <p>UHI Value : 32.5 C</p>
                  <p>UHI Value : 32.50 C - 33.00 C</p>
                  <p>UHI Value : 33.00 C - 33.50 C</p>
                  <p>UHI Value : 33.50 C - 34.00 C </p>
                  <p>UHI Value : 34.00 C - 35.00 C</p>
                </div>
                <div className="chloro-symbols">
                  <div className="chlo1"></div>
                  <div className="chlo2"></div>
                  <div className="chlo3"></div>
                  <div className="chlo4"></div>
                  <div className="chlo5"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Legends End */}
        </div>
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
      <div className="UHIMap-map-container">
        <MapContainer
          center={[-6.733252, 108.552161]}
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
          <GeoJSON
            data={data2021}
            onEachFeature={onEachPolygons}
            style={style}
          ></GeoJSON>
          <MinimapControl position="topright"></MinimapControl>
        </MapContainer>
      </div>
    </div>
  );
};

export default UHIMapScreen;

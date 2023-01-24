import React from "react";
import urban from "../../images/urban.png";
import urban2 from "../../images/urban2.png";
import "./DetailPage.css";
import constant from "../../constant/descriptions.json";
import spark from "../../images/spark.png";
import cane from "../../images/cane.png";
import pills from "../../images/pills.png";
import logogeoloka3 from "../../images/logogeoloka3.png";
import activities from "../../images/activities.png";
import weather from "../../images/weather.png";
import material from "../../images/material.png";
import landscape from "../../images/landscape.png";
import geometry from "../../images/geometry.png";

const impact = [
  {
    title: "Increased Energy Consumption",
    desc: "Heat islands increase the demand for air conditioning to cool buildings which also elevates overall electricity demand.",
    img: pills,
  },
  {
    title: "Compromised  Human Health & Comfort",
    desc: "Heat islands contribute to heat-related deaths and illnesses such as general discomfort, respiratory difficulties, heat cramps, and non-fatal heat stroke.",
    img: spark,
  },
  {
    title: "Upraised Emmission of Air Pollutant",
    desc: "Pollutants contribute to complex air quality problems such as the formation of ground-level ozone (smog), fine particulate matter, and acid rain.",
    img: cane,
  },
];

const cause = [
  {
    title: "Reduced Natural Landscapes",
    desc: `Vegetation tend to cool the air, but dry surfaces in urban areas – such as roads and buildings – contribute to higher temperatures.`,
    img: landscape,
  },

  {
    title: "Urban Material Properties",
    desc: "Conventional human-made materials such as pavements or roofing tend to reflect less solar energy, and absorb and emit more of the sun’s heat.",
    img: material,
  },
  {
    title: "Urban Geometries",
    desc: "Surfaces and structures obstructed by neighboring buildings become large thermal masses that cannot release their heat readily.",
    img: geometry,
  },
  {
    title: "Weather and Geography",
    desc: "Calm and clear weather conditions result in more severe island heat by maximizing the amount of solar energy reaching urban surfaces. ",
    img: weather,
  },
  {
    title: "Heat Generated from Human Activities",
    desc: "Vehicles, air conditioning units, buildings, and industrial facilities are all sources of human-generated waste radiating heat into the urban environment.",
    img: activities,
  },
];

export default function DetailPage() {
  return (
    <div>
      <div className="top-section-container">
        <div className="quiz_button">
          <a href="/FormScreen">Let's do QUIZ!</a>
        </div>
        <div className="bar"></div>
        <div className="question1">
          <div>
            What is <br /> Urban Heat Island?
          </div>
          <div>
            Urban Heat Island <br />
            Maps
          </div>
        </div>

        <div
          className="question1"
          style={{ marginBottom: "180px", gap: "590px" }}
        >
          <div style={{ background: "#D53939", color: "white" }}>
            What caused <br /> Urban Heat Island?
          </div>
          <div style={{ background: "#D53939", color: "white" }}>
            Statistical <br />
            Analysis
          </div>
        </div>

        <div className="question1" style={{ marginTop: "500px", gap: "590px" }}>
          <div>
            What are impacts of <br /> Urban Heat Island?
          </div>
          <div>People Contribution</div>
        </div>
        <img src={urban} alt="urban" />
        <h1>GEOLOKA</h1>
        <p>{constant.homeDescription}</p>
      </div>
      <div className="section-container">
        <img src={logogeoloka3} alt="" className="logo3" />
        <img src={urban2} alt="" className="urban2" />
        <div className="desc-text-container">
          <div className="urban2-title">What is Urban Heat Island?</div>
          <p>
            Geoloka is a dynamic WebGIS that are expected to be used to mitigate
            the negative effects of UHI on the environment and can be used as
            the basis for monitoring UHI in urban strategic planning, urban
            temperature control, and input for government policies related to
            the environment in the future.
          </p>
        </div>
      </div>
      <div className="section2-container">
        <img src={logogeoloka3} alt="" className="logo3" />
        <h1>
          What Caused <br></br>Urban Heat Island?
        </h1>
        <div className="cause_container">
          {cause.map((item, index) => {
            return (
              <div
                className="impact_box"
                id={index}
                style={{ background: "none", boxShadow: "none" }}
              >
                <div className="flex">
                  <img src={item.img} alt="" />
                  <h1>{item.title}</h1>
                </div>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section2-container">
        <img src={pills} alt="" className="spark" />
        <img src={cane} alt="" className="cane" />
        <img src={spark} alt="" className="pills" />
        <img src={logogeoloka3} alt="" className="logo3" />
        <h1>
          What are the Impacts <br /> of Urban Heat Island?
        </h1>
        <div className="impact_container">
          {impact.map((item, index) => {
            return (
              <div className="impact_box" id={index}>
                <div className="flex">
                  <img src={item.img} alt="" />
                  <h1>{item.title}</h1>
                </div>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

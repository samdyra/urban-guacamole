import React from "react";
import urban from "../../images/urban.png";
import urban2 from "../../images/urban2.png";
import "./DetailPage.css";
import constant from "../../constant/descriptions.json";
import spark from "../../images/spark.png";
import cane from "../../images/cane.png";
import pills from "../../images/pills.png";
import logogeoloka3 from "../../images/logogeoloka3.png";

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

export default function DetailPage() {
  return (
    <div>
      <div></div>

      <div className="top-section-container">
        <div className="bar"></div>
        <div>What is Urban Heat Island?</div>
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
        <div></div>
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

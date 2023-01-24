import React from "react";
import urban from "../../images/urban.png";
import urban2 from "../../images/urban2.png";
import "./DetailPage.css";
import constant from "../../constant/descriptions.json";
import spark from "../../images/spark.png";
import cane from "../../images/cane.png";
import pills from "../../images/pills.png";
import logogeoloka3 from "../../images/logogeoloka3.png";

export default function DetailPage() {
  return (
    <div>
      <div></div>
      <img src={pills} alt="" className="spark" />
      <img src={cane} alt="" className="cane" />
      <img src={spark} alt="" className="pills" />
      <div className="bar"></div>
      <div className="top-section-container">
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
            Urban Heat Island (UHI) is a heat concentration phenomenon in urban
            areas due to an undistributed heat surface to the surrounding rural
            areas. UHI occurs when cities replace natural land cover with dense
            concentrations of pavement, buildings, and other surfaces that
            absorb and retain heat.
          </p>
        </div>
      </div>
      <div className="section-container">
        <img src={logogeoloka3} alt="" className="logo3" />
        <h1>
          What Caused <br></br>Urban Heat Island?
        </h1>
        <div></div>
      </div>
      <div className="section-container">
        <img src={logogeoloka3} alt="" className="logo3" />
        <h1>
          What are the Impacts <br /> of Urban Heat Island?
        </h1>
        <div></div>
      </div>
    </div>
  );
}

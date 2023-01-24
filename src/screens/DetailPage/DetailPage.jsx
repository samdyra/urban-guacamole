import React from "react";
import urban from "../../images/urban.png";
import urban2 from "../../images/urban2.png";
import "./DetailPage.css";
import constant from "../../constant/descriptions.json";

export default function DetailPage() {
  return (
    <div>
      <div className="top-section-container">
        <div>What is Urban Heat Island?</div>
        <img src={urban} alt="urban" />
        <h1>GEOLOKA</h1>
        <p>{constant.homeDescription}</p>
      </div>
      <div className="section-container">
        <img src={urban2} alt="" />
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
    </div>
  );
}

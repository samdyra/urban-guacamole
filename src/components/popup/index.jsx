import React from "react";
import temp from "../../images/temp.png";
import style from "./styles.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import logoGeoloka from "../../images/logoGeoloka3.png";

const PopUpImage = ({ data }) => {
  const FIRST_IMAGE = {
    imageUrl: data?.image,
  };
  const SECOND_IMAGE = {
    imageUrl: data?.image1,
  };
  return (
    <div className="popup-container">
      {/* <img src={data.image}></img> */}
      <ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
        delimiterIconStyles={{
          width: 35,
          height: 35,
          backgroundImage: logoGeoloka,
        }}
        className="slider-before-after"
      />
      <div className="temp-container">
        <div className="temp-name">Name: {data.name}</div>
        <div className="temp-place">Condition: {data.temp}</div>
        <div className="temp-date">
          Enough vegetation on your area?: {data.vegetation}
        </div>
        <div className="temp-date">Reported on {data.date}</div>
        <div className="temp-temp-container">
          <div className="temp-value">
            Estimated Temperature on the area is {`${data.celcius} C°`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpImage;

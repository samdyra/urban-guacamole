import React from "react";
import temp from "../../images/temp.png"
import style from "./styles.css"
const PopUpImage = ({data}) => {
  return (
    <div className="popup-container">
      <img src={data.image}></img>
      <div className="temp-container">
        <div className="temp-name">{data.nama}</div>
        <div className="temp-place">{data.place}</div>
        <div className="temp-date">{data.time}</div>
        <div className="temp-lat">{data.latitude}</div>
        <div className="temp-long">{data.longitude}</div>
        <div className="temp-temp-container">
            {/* <img src={temp}></img> */}
            <div className="temp-value">{`${data.temp} C°`}</div>
        </div>
      </div>
    </div>
  );
};

export default PopUpImage;

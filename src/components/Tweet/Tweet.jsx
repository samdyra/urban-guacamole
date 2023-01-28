import React from "react";
import "./tweetStyle.css";

const Tweet = ({ data }) => {
  return (
    <div className="tweet-container">
      <div className="tweet-image-container">
        <div className="tweet-image">
          <img src={data.image}></img>
        </div>
        <div className="all-tweet-texts-container">
          <div className="tweet-id-content-container">
            <div className="tweet-id-container">
              <h1>{data.name}</h1>
              <h4>{data.place}</h4>
              {/* <p>{data.temp}</p> */}
            </div>
            <div className="tweet-tweet-container">
              <h1>{`${data.celcius} C°`}</h1>
              <p>{data.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;

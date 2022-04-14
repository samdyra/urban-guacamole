import React from "react";
import "./tweetStyle.css";
import sam from "../../images/dsam.png";

const Tweet = ({ data }) => {
  console.log(data.img);
  return (
    <div className="tweet-container">
      <div className="tweet-image-container">
        <div className="tweet-image">
          <img src={data.img}></img>
        </div>
        <div className="all-tweet-texts-container">
          <div className="tweet-id-content-container">
            <div className="tweet-id-container">
              <h1>{data.name}</h1>
              <h4>{data.username}</h4>
              <p>{data.minute}</p>
            </div>
            <div className="tweet-tweet-container">
              <p>{data.tweet}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;

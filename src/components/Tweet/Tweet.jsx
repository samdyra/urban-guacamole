import React from "react";

const Tweet = () => {
  return (
    <div className="tweet-container">
      <div className="tweet-image-container">
        <div className="tweet-image">
          <img></img>
        </div>
        <div className="all-tweet-texts-container">
          <div className="tweet-id-content-container">
            <div className="tweet-id-container">
              <h1>Dwiputra Sam</h1>
              <h4>@dwps-sam</h4>
              <p>5m</p>
            </div>
            <div className="tweet-tweet-container">
              <p>I don’t remember IPDN’s canteen being this hot?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;

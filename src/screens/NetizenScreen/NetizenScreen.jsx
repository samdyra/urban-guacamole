import React from "react";

const NetizenScreen = () => {
  return (
    <div className="netizen-container">
      <div className="netizen-legend-container">
        {/* Netizen Title */}
        <div className="netizen-title">
          <h1>HOT TWEETS</h1>
          <h2>Kabupaten Cirebon</h2>
          <p>Tweets on selected area:</p>
          <h1>12 tweets found!</h1>
        </div>
        {/* Netizen Title End */}
      </div>
      {/* Netizen tag */}
      <div className="netizen-tag">
        <div>hot</div>
        <div>pollution</div>
        <div>temperature</div>
        <div>add/edit</div>
      </div>
      {/* Netizen tag end*/}
      {/* Netizen Tweets*/}
      <div className="twitter-container">
        <div className="account-container">
          <div className="twitter-image">
            <img></img>
          </div>
          <div className="twitter-content">
            <div className="twitter-name">
              <p>Dwiputra Sam</p>
              <p>@dwp_sam</p>
            </div>
            <div className="tweet">
              <p>I dont remember IPDNs canteen being this hot?</p>
            </div>
          </div>
        </div>
      </div>
      {/* Netizen Tweets End*/}
      {/* Netizen Tweets logo*/}
      <div className="tweets-logo">
        <img></img>
      </div>
      {/* Netizen Tweets logo End */}
      <div className="netizen-map-container"></div>
    </div>
  );
};

export default NetizenScreen;

import React from "react";
import "./NoVideos.css";

function NoVideos() {
  return (
    <div className="no-videos-container">
      <img
        // src="https://wehearthart.co.uk/wp-content/uploads/2018/11/Move-along-nothing-to-see-here.jpg"
        src="https://api.time.com/wp-content/uploads/2015/05/404-errors15.jpg"
        alt="No videos"
        className="meme"
      />
    </div>
  );
}

export default NoVideos;

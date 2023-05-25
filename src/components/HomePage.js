import "./HomePage.css";

import React from "react";

function HomePage({ handleUserInput, handleClick, userInput, videos }) {

  
  return (
    <div class="search-bar-container">
      <div class="input-group mb-3">
        <input
          onChange={handleUserInput}
          value={userInput}
          type="text"
          class="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="button-addon2"
        ></input>
        <button
          onClick={handleClick}
          value={userInput}
          class="btn btn-danger"
          type="button"
          id="button-addon2"
          style={{ color: "white" }}
        >
          Search
        </button>
      </div>
      <div class="results">
        <p>No Search Results Yet!, Please submit a search above!</p>
      </div>
      {/* <div className="results">
        {videos.length > 0 ? (
          <div>
            {videos.map((video) => (
              <VideoCards key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p>No Search Results Yet! Please submit a search above!</p>
        )}
      </div> */}
    </div>
  );
}

export default HomePage;

import "./HomePage.css";
import VideoIndex from "./VideoCard/VideoIndex";

function HomePage({
  handleUserInput,
  handleClick,
  handleEnter,
  userInput,
  videos,
  showModal,
}) {
  return (
    <div className="search-bar-container">
      <div className="input-group">
        <input
          onChange={handleUserInput}
          onKeyDown={handleEnter}
          value={userInput}
          type="text"
          className="form-control mb-3"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="button-addon2"
          disabled={showModal}
        ></input>
        <button
          onClick={handleClick}
          value={userInput}
          className="btn btn-danger mb-3 small-button"
          type="button"
          id="button-addon2"
          style={{ color: "white" }}
        >
          Search
        </button>
      </div>
      <div className={`results ${videos.length > 0 ? "has-videos" : ""}`}>
        {videos.length > 0 ? (
          <div>
            <VideoIndex allVideo={videos} />
          </div>
        ) : (
          <p>No Search Results Yet!, Please submit a search above!</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;

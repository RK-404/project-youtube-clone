import "./HomePage.css";

function HomePage({ handleUserInput, handleClick, handleEnter, userInput, videos }) {
  return (
    <div className="search-bar-container">
      <div className="input-group mb-3">
        <input
          onChange={handleUserInput}
          onKeyDown={handleEnter}
          value={userInput}
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="button-addon2"
        ></input>
        <button
          onClick={handleClick}
          value={userInput}
          className="btn btn-danger"
          type="button"
          id="button-addon2"
          style={{ color: "white" }}
        >
          Search
        </button>
      </div>
      {!videos.length &&  <div className="results">
        <p>No Search Results Yet!, Please submit a search above!</p>
      </div>}
    </div>
  );
}

export default HomePage;

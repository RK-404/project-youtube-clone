// import React from "react"

import { Link } from "react-router-dom";

function NavBar({ resetVideos }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand" onClick={resetVideos} to="/" style={{ color: "white", fontWeight: "bold"}}>
          YouTube
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              onClick={resetVideos}
              aria-current="page"
              to="/"
              style={{ color: "white" }}
            >
              Home
            </Link>
            <Link className="nav-link" onClick={resetVideos} to="/about" style={{ color: "white" }}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
  
export default NavBar;

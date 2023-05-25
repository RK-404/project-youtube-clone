// import React from "react"


function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: "white" }}>
            Youtube
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "white" }}
              >
                Home
              </a>
              <a className="nav-link" href="/about" style={{ color: "white" }}>
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavBar;
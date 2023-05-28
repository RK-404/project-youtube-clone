// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-danger">
//       <div className="container-fluid">
//         <Link to="className="navbar-brand" href="/" style={{ color: "white" }}>
//           Youtube
//         </Link>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <Link to="nav-link active"
//               aria-current="page"
//               href="/"
//               style={{ color: "white" }}
//             >
//               Home
//             </Link>
//             <Link to="nav-link" href="/about" style={{ color: "white" }}>
//               About
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

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
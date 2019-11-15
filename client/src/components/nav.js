import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
    <span className="navbar-text">
      <Link to="/">
        Search
        </Link>
      </span>
      <span className="navbar-text">
        <Link to="/movies/">
          My List
        </Link>
      </span>
    </nav>
  );
}

export default Nav;

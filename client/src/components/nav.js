import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Watch It!
        </Link>
      <span className="navbar-text">
        <Link to="/movies/">
          My List
        </Link>
      </span>
    </nav>
  );
}

export default Nav;

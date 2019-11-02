import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Watch Movies Now
        </Link>
      <span className="navbar-text">
        <Link to="/movies/">
          Saved
        </Link>
      </span>
    </nav>
  );
}

export default Nav;

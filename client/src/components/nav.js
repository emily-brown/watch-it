import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <span className="navbar-brand">
        <a href="https://github.com/emily-brown/watch-it">
          <img id="logo" src="watch-it-logo.png" width="100" height="100" alt=""></img>
        </a>
      </span>
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

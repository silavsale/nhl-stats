import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@rmwc/button";
import Logo from "./Logo/Logo";
import "../App.css";

function Nav() {
  const navStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <nav>
      <Logo />
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/teams">
          <li>Teams</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [activeNav, setNav] = useState(false);

  return (
    <nav className="navbar-container">
      <h1 className="header-name">Joshua Garcia</h1>
      <button
        className="bars-btn"
        type="button"
        onClick={() => {
          setNav(!activeNav);
        }}
      >
        <i className="fa fa-bars fa-2x"></i>
      </button>

      <div
        className={`tack ${activeNav ? "" : "hide"}`}
        onClick={() => {
          setNav(!activeNav);
        }}
      >
        <div className="links-container">
          <NavLink
            exact
            to="/"
            className="links"
            activeStyle={{ display: "none" }}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/more-projects"
            className="links"
            activeStyle={{ display: "none" }}
          >
            About Me
          </NavLink>

          <a
            className="links"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rivveneyes"
          >
            Github
          </a>
          <a
            className="links"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/joshua-garica-04351520b/"
          >
            Linkedin
          </a>
        </div>
      </div>
    </nav>
  );
}

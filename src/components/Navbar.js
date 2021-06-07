import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <h1 className="header-name">Joshua Garcia</h1>
      <div className="personal">
        <a
          className="links"
          href="https://www.linkedin.com/in/joshua-garica-04351520b/"
        >
          Linkeing
        </a>
        <a className="links" href="https://github.com/rivveneyes">
          Github
        </a>
      </div>

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
          to="/my-resume"
          className="links"
          activeStyle={{ display: "none" }}
        >
          My Resume
        </NavLink>
        <NavLink
          exact
          to="/more-projects"
          className="links"
          activeStyle={{ display: "none" }}
        >
          More projects
        </NavLink>
      </div>
    </nav>
  );
}

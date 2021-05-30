import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <h1 className="header-name">Joshua Garcia</h1>
      <div className="links-container">
        <NavLink to="/Home" className="links" activeStyle={{ display: "none" }}>
          Home
        </NavLink>
        <NavLink
          to="/portfolio"
          className="links"
          activeStyle={{ display: "none" }}
        >
          My Bio
        </NavLink>
        <NavLink
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

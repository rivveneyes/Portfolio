import React from "react";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="header-name">Joshua Garcia</h1>
      <div className="links-container">
        <button>My Bio</button>
        <button>More projects</button>
        {/* <a href="#">My Bio</a>
        <a href="#">More projects</a> */}
      </div>
    </div>
  );
}

import React from "react";
import "../shared/NavBar.css";
import logo_white from "../../img/logo_white.png";

function NavBar({ location }) {
  return (
    <nav>
      <div className="map-nav-bar">
        <img src={logo_white} alt="냠냠박사" className="logo-image" />
        <em>냠냠박사</em>
        <img
          src={require("../../img/marker_white.png")}
          className="loc-image"
        />
        <a>{location}</a>
      </div>
    </nav>
  );
}

export default NavBar;

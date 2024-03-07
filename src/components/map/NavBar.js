import React from "react";
import "../shared/NavBar.css";
import logo_white from "../../img/logo_white.png";

function NavBar() {
  return (
    <nav>
      <div className="map-nav-bar">
        <img src={logo_white} alt="냠냠박사" className="logo-image" />
        <em>냠냠박사</em>
        <img
          src={require("../../img/marker_white.png")}
          className="loc-image"
        />
        <a>지역 선택</a>
      </div>
    </nav>
  );
}

export default NavBar;

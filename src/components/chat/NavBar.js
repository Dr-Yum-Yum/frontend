import React from "react";
import "../shared/NavBar.css";
import logo_orange from "../../img/logo_orange.png";

function NavBar() {
  return (
    <nav>
      <div className="chat-nav-bar">
        <img src={logo_orange} alt="냠냠박사" className="logo-image" />
        <em>채팅방</em>
      </div>
    </nav>
  );
}

export default NavBar;

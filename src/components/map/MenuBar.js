import React from "react";
import "../shared/MenuBar.css";

function MenuBar() {
  return (
    <div className="map-menu-bar">
      <a>검색</a>
      <em>|</em>
      <a>찜</a>
      <em>|</em>
      <a>MY</a>
      <em>|</em>
      <a href="/login">로그인</a>
    </div>
  );
}

export default MenuBar;

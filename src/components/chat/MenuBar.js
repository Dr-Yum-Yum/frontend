import React from "react";
import "../shared/MenuBar.css";

function MenuBar() {
  return (
    <div className="chat-menu-bar">
      <a>채팅</a>
      <em>|</em>
      <a>공유채팅</a>
      <em>|</em>
      <a>친구</a>
      <em>|</em>
      <a>일정</a>
    </div>
  );
}

export default MenuBar;

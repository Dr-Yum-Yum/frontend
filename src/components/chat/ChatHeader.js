import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChatHeader.css";

function ChatHeader({ chatRoom }) {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="chat-header">
      <button className="back-button" onClick={handleBackButtonClick}></button>
      <div className="chat-room-name">{chatRoom.name}</div>
      <button className="menu-button"></button>
    </div>
  );
}

export default ChatHeader;

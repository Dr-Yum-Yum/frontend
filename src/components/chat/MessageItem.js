import React from "react";
import "./MessageItem.css";

function MessageItem({ message }) {
  return (
    <div className="message-item-container">
      <div className="message-item-author">{message.author}</div>
      <div className="message-item">
        <div className="message-item-content">{message.content}</div>
        <div className="message-item-time">{message.time}</div>
      </div>
    </div>
  );
}

export default MessageItem;

import React from "react";
import MessageItem from "./MessageItem";

import "./MessageList.css";

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;

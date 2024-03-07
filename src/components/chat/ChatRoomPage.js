import React from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

import "./ChatRoomPage.css";

function ChatRoomPage({ chatRoom, messages, onSendMessage }) {
  return (
    <div className="chat-room-page">
      <ChatHeader chatRoom={chatRoom} />
      <MessageList messages={messages} />
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
}

export default ChatRoomPage;

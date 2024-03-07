import React from "react";
import ChatRoomItem from "./ChatRoomItem";

import "../shared/List.css";

function ChatRoomList({ chatRooms }) {
  return (
    <div id="list-chat" className="list">
      {chatRooms.map((chatRoom) => (
        <ChatRoomItem key={chatRoom.id} chatRoom={chatRoom} />
      ))}
    </div>
  );
}

export default ChatRoomList;

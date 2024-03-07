import React from "react";
import "../shared/Item.css";

function ChatRoomItem({ chatRoom }) {
  return (
    <div className="item">
      <div className="chat-room-item">
        <img src={require("../../img/test_pizza.png")} alt={chatRoom.name} />
      </div>
      <div className="item-info">
        <a href="/chatRoomId">{chatRoom.name}</a>
        <h2>{chatRoom.lastMessage}</h2>
      </div>
    </div>
  );
}

export default ChatRoomItem;

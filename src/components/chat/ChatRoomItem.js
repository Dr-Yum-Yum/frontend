import React from "react";
import { Link } from "react-router-dom";
import "../shared/Item.css";

function ChatRoomItem({ chatRoom }) {
  return (
    <div className="item">
      <div className="chat-room-item">
        <img src={require("../../img/test_pizza.png")} alt={chatRoom.name} />
      </div>
      <div className="item-info">
        <Link to={`/chatRoomId`}>{chatRoom.name}</Link>
        {/* <Link to={`/chat/${chatRoom.id}`}>{chatRoom.name}</Link> */}
        <h2>{chatRoom.lastMessage}</h2>
      </div>
    </div>
  );
}

export default ChatRoomItem;

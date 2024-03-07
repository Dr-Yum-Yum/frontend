import React, { useState } from "react";
import "./ChatInput.css";

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="chat-input">
      <button onClick={handleSend}>+</button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="메시지 입력"
      />
      <button onClick={handleSend}>전송</button>
    </div>
  );
}

export default ChatInput;

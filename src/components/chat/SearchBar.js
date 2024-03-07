// SearchBar.js
import React from "react";
import "../shared/SearchBar.css";

function SearchBar() {
  return (
    <div className="chat-search-bar">
      <input type="text" placeholder="채팅방 검색" />
      <button type="submit"></button>
    </div>
  );
}

export default SearchBar;

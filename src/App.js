import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapNavBar from "./components/map/NavBar";
import MapSearchBar from "./components/map/SearchBar";
import MapMenuBar from "./components/map/MenuBar";
import FilterBar from "./components/map/FilterBar";
import StoreList from "./components/map/StoreList";
import MapCenter from "./components/map/MapCenter";
import ChatHeader from "./components/chat/ChatHeader";
import ChatInput from "./components/chat/ChatInput";
import ChatRoomItem from "./components/chat/ChatRoomItem";
import ChatRoomList from "./components/chat/ChatRoomList";
import ChatRoomPage from "./components/chat/ChatRoomPage";
import MessageItem from "./components/chat/MessageItem";
import MessageList from "./components/chat/MessageList";
import ChatSearchBar from "./components/chat/SearchBar";
import SignUpPage from "./components/login/SignUpPage";
import LoginPage from "./components/login/LoginPage";
import ChatNavBar from "./components/chat/NavBar";
import ChatMenuBar from "./components/chat/MenuBar";

import "./App.css";

function App() {
  const [stores, setStores] = useState([]);

  // 검색 결과 업데이트
  const updateStores = (newStores) => {
    setStores(newStores);
  };

  const chatRooms = [
    {
      id: "room1",
      name: "채팅방1",
      lastMessage: "안녕하세요! 어제 잘 보내셨나요?",
    },
    {
      id: "room2",
      name: "채팅방2",
      lastMessage: "오늘 저녁 계획이 있으신가요?",
    },
    {
      id: "room3",
      name: "채팅방3",
      lastMessage: "프로젝트 마감일이 얼마 남지 않았네요.",
    },
    {
      id: "room4",
      name: "채팅방4",
      lastMessage: "새로운 공지사항을 확인해주세요.",
    },
    { id: "room5", name: "채팅방5", lastMessage: "점심 메뉴 추천해주세요." },
    { id: "room6", name: "채팅방6", lastMessage: "회의 시간 변경됐어요." },
    {
      id: "room7",
      name: "채팅방7",
      lastMessage: "내일 시험이네요, 준비 잘 하세요!",
    },
  ];

  const messages = [
    {
      id: "msg1",
      chatRoomId: "room1",
      author: "사용자1",
      content: "안녕하세요!",
      time: "오전 9:00",
    },
    {
      id: "msg2",
      chatRoomId: "room1",
      author: "사용자2",
      content: "안녕하세요, 오늘 일정 어떻게 되세요?",
      time: "오전 9:01",
    },
    {
      id: "msg3",
      chatRoomId: "room1",
      author: "사용자1",
      content: "저는 오전에 미팅이 있어요.",
      time: "오전 9:02",
    },
    {
      id: "msg4",
      chatRoomId: "room2",
      author: "사용자3",
      content: "점심 뭐 먹을까요?",
      time: "오전 11:45",
    },
    {
      id: "msg5",
      chatRoomId: "room2",
      author: "사용자4",
      content: "저는 샐러드 생각중입니다.",
      time: "오전 11:46",
    },
    {
      id: "msg6",
      chatRoomId: "room3",
      author: "사용자5",
      content: "프로젝트 파일 받았어요!",
      time: "오후 1:30",
    },
    {
      id: "msg7",
      chatRoomId: "room3",
      author: "사용자6",
      content: "수고하셨습니다!",
      time: "오후 1:45",
    },
    {
      id: "msg7",
      chatRoomId: "room3",
      author: "사용자6",
      content: "수고하셨습니다!",
      time: "오후 1:45",
    },
    {
      id: "msg7",
      chatRoomId: "room3",
      author: "사용자6",
      content: "수고하셨습니다!",
      time: "오후 1:45",
    },
    {
      id: "msg7",
      chatRoomId: "room3",
      author: "사용자6",
      content: "수고하셨습니다!",
      time: "오후 1:45",
    },
    {
      id: "msg7",
      chatRoomId: "room3",
      author: "사용자6",
      content: "수고하셨습니다!",
      time: "오후 1:45",
    },
    {
      id: "msg7",
      chatRoomId: "room3",
      author: "사용자6",
      content: "수고하셨습니다!",
      time: "오후 1:45",
    },
  ];

  const handleSendMessage = (message) => {
    console.log("메시지 전송:", message);
  };

  // 현재 활성화된 채팅방
  const activeChatRoom = chatRooms[0] || {};

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="main">
              <div>
                <div className="main-side-map">
                  <MapNavBar />
                  <MapSearchBar updateStores={updateStores} />
                  <MapMenuBar />
                  <FilterBar />
                  <StoreList stores={stores} />
                </div>
              </div>
              <div className="main-map">
                <MapCenter></MapCenter>
              </div>
              <div className="main-side-chat">
                <ChatNavBar />
                <ChatSearchBar />
                <ChatMenuBar />
                <Routes>
                  <Route
                    index
                    element={<ChatRoomList chatRooms={chatRooms} />}
                  />
                  <Route
                    path="chatRoomId"
                    element={
                      <ChatRoomPage
                        chatRoom={activeChatRoom}
                        messages={messages}
                        onSendMessage={handleSendMessage}
                      />
                    }
                  />
                </Routes>
              </div>
            </div>
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";

const handleOpenInApp = () => {
  setTimeout(() => {
    window.location.href = "https://link.duniagames.co.id/chat/join"
  }, 1)
}

const handleOpenRoomChats = () => {
  setTimeout(() => {
    window.location.href = "id.co.duniagames://room-chat"
  }, 1)
}

const App = () => (
  <div>
    <button onClick={handleOpenInApp}>Open in app</button>
    <button onClick={handleOpenRoomChats}>Open room chat</button>
  </div>
);

export default App;

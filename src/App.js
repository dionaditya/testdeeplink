import React from "react";

const handleOpenInApp = () => {
  setTimeout(() => {
    window.location.href = "https://link.duniagames.co.id/chat/join"
  }, 1)
}

const App = () => (
  <div>
    <button onClick={handleOpenInApp}>Open in app</button>
  </div>
);

export default App;

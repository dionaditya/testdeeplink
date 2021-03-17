import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const handleOpenInApp = () => {
  const userAgent = navigator.userAgent || navigator.vendor
  const ios = userAgent.match(/ipad/i) || userAgent.match(/iphone/i) || userAgent.match(/ipod/i)
  const android = userAgent.match(/android/i)
  setTimeout(() => {
    const isJoinRoom = window.location.href.includes('join')
    const url = "duniagames://room-chat/join"
    if (isJoinRoom) {
      if (ios) {
        window.location.href = url
      } 
  
      if (android) {
        window.location.href = url
      }
    } else {
      if (ios) {
        window.location.href = "id.co.duniagames.ios://room-chat"
      } 
  
      if (android) {
        window.location.href = "duniagames://room-chat"
      }
    }

    setTimeout(() => {
      let url;
      if (android) { url = 'https://play.google.com/store/apps/details?id=id.co.duniagames'; }
      if (ios) { url = 'https://apps.apple.com/id/app/dunia-games/id1446034036?l=id'; }
      window.location.href = url;
    }, 500);
  
  }, 1)



}

const ChatRoom = () => {
  return (
    <div>
      Chat room
      You should open in app 
      <button onClick={handleOpenInApp}>
        Open in app
      </button>
    </div>
  )
}

const JoinRoom = () => {
  return (
    <div>
      Join room
      <button onClick={handleOpenInApp}>
        Open in app
      </button>
    </div>
  )
}

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/chat/join' component={JoinRoom} />
        <Route exact path='/chat' component={ChatRoom} />
        <Route exact path='/chat/room' component={ChatRoom} />
      </Switch>
    </div>
  </Router>
);

export default App;

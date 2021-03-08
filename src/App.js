import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import ItemList from "./app/ItemList";
import items from "./app/Item.reducers";

// Setup Redux store with Thunks
const reducers = combineReducers({ items });
const store = createStore(reducers, applyMiddleware(thunk));

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

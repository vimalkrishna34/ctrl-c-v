import React from "react";
import Sidebar from "./components/Sidebar";
import Feeds from "./components/Feeds";
import Friends from "./components/Friends";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Sidebar />
        <Feeds />
        <Friends />
      </div>
    </div>
  );
}

export default App;

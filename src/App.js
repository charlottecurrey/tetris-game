import React from "react";
import TetrisGame from "./components/TetrisGame";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tetris Game</h1>
      </header>
      <TetrisGame />
    </div>
  );
}

export default App;

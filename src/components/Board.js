import React from "react";
import "./Board.css";

const Board = ({ grid }) => {
  return (
    <div className="tetris-board">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="tetris-row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`tetris-cell ${cell ? cell : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;

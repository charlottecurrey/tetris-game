import React from "react";
import "./Piece.css";

const CELL_SIZE = 30; // Assuming each cell in the grid is 30x30 pixels

const Piece = ({ shape, position, color }) => {
  return (
    <div
      className={`tetris-piece ${color}`} // Added the color prop as a class here
      style={{
        transform: `translate(${position.x * CELL_SIZE}px, ${
          position.y * CELL_SIZE
        }px)`,
      }}
    >
      {shape.map((row, rowIndex) => (
        <div key={rowIndex} className="tetris-piece-row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`tetris-piece-cell ${cell ? color : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Piece;

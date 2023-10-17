import React, { useState /*, useEffect*/ } from "react";
import {
  createEmptyGrid,
  getRandomPiece,
  hasCollision,
} from "../utils/gameLogic";
import Board from "./Board";
import Controls from "./Controls";
import Piece from "./Piece";
import "./TetrisGame.css";

const START_POSITION = { x: 5, y: 0 };

const TetrisGame = () => {
  const [grid /*setGrid*/] = useState(createEmptyGrid());
  const [piece /*setPiece*/] = useState(getRandomPiece());
  const [position, setPosition] = useState(START_POSITION);
  const [gameOver /*setGameOver*/] = useState(false);

  const movePiece = (x, y) => {
    const newPosition = { x: position.x + x, y: position.y + y };
    if (!hasCollision(newPosition, piece, grid)) {
      setPosition(newPosition);
    } else if (y) {
      // Add more logic here when a collision occurs
    }
  };

  // ... rest of the game logic

  return (
    <div className="tetris-game">
      <Board grid={grid} />
      <Piece shape={piece.shape} position={position} color={piece.color} />
      <Controls movePiece={movePiece} />
      {gameOver && <div className="game-over">Game Over</div>}
    </div>
  );
};

export default TetrisGame;

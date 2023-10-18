import React, { useState, useEffect, useCallback } from "react";
import {
  createEmptyGrid,
  getRandomPiece,
  hasCollision,
  rotatePiece,
} from "../utils/gameLogic";
import Board from "./Board";
import Controls from "./Controls";
import Piece from "./Piece";
import "./TetrisGame.css";

const START_POSITION = { x: 5, y: 0 };

const TetrisGame = () => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [piece, setPiece] = useState(getRandomPiece());
  const [position, setPosition] = useState(START_POSITION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const placePiece = useCallback(() => {
    const newGrid = [...grid];
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x]) {
          newGrid[y + position.y][x + position.x] = piece.color;
        }
      }
    }
    setGrid(newGrid);
    const completedRows = clearRows(newGrid);
    setScore(score + completedRows);
    const newPiece = getRandomPiece();
    setPosition(START_POSITION);
    setPiece(newPiece);

    if (hasCollision(START_POSITION, newPiece, newGrid)) {
      setGameOver(true);
    }
  }, [grid, piece, position, score]);

  const movePiece = useCallback(
    (x, y) => {
      const newPosition = { x: position.x + x, y: position.y + y };
      if (!hasCollision(newPosition, piece, grid)) {
        setPosition(newPosition);
      } else if (y) {
        placePiece();
      }
    },
    [grid, piece, position, placePiece]
  );

  useEffect(() => {
    if (!gameOver) {
      const dropInterval = setInterval(() => {
        movePiece(0, 1);
      }, 1000);

      return () => clearInterval(dropInterval);
    }
  }, [gameOver, movePiece]);

  const clearRows = (grid) => {
    let completedRows = 0;
    for (let y = 0; y < grid.length; y++) {
      if (grid[y].every((cell) => cell)) {
        completedRows++;
        grid.splice(y, 1);
        grid.unshift(new Array(grid[0].length).fill(0));
      }
    }
    return completedRows;
  };

  const rotate = () => {
    const rotated = rotatePiece(piece);
    if (!hasCollision(position, rotated, grid)) {
      setPiece(rotated);
    }
  };

  const restartGame = () => {
    setGrid(createEmptyGrid());
    setPiece(getRandomPiece());
    setPosition(START_POSITION);
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="tetris-game">
      <Board grid={grid} />
      <Piece shape={piece.shape} position={position} color={piece.color} />
      <Controls movePiece={movePiece} rotate={rotate} />
      {gameOver && (
        <div className="game-over">
          Game Over
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default TetrisGame;

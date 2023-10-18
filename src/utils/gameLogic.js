// Tetrominos Definition
const TETROMINOS = {
  I: {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: "cyan",
  },
  J: {
    shape: [
      [0, 0, 0],
      [2, 2, 2],
      [0, 0, 2],
    ],
    color: "blue",
  },
  L: {
    shape: [
      [0, 0, 0],
      [3, 3, 3],
      [3, 0, 0],
    ],
    color: "orange",
  },
  O: {
    shape: [
      [4, 4],
      [4, 4],
    ],
    color: "yellow",
  },
  S: {
    shape: [
      [0, 5, 5],
      [5, 5, 0],
      [0, 0, 0],
    ],
    color: "green",
  },
  T: {
    shape: [
      [0, 6, 0],
      [6, 6, 6],
      [0, 0, 0],
    ],
    color: "purple",
  },
  Z: {
    shape: [
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0],
    ],
    color: "red",
  },
};

// Get a random tetromino
function getRandomPiece() {
  const tetrominos = Object.values(TETROMINOS);
  const randomTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return randomTetromino;
}

// Check for collision
function hasCollision(position, piece, grid) {
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (
        piece.shape[y][x] &&
        (grid[y + position.y] && grid[y + position.y][x + position.x]) !== 0
      ) {
        return true;
      }
    }
  }
  return false;
}

// Create an empty grid
function createEmptyGrid() {
  return Array.from({ length: 20 }, () => Array(10).fill(0));
}

const rotatePiece = (piece) => {
  const rotatedShape = piece.shape[0].map((val, index) =>
    piece.shape.map((row) => row[index])
  );
  return {
    shape: rotatedShape.reverse(),
    color: piece.color,
  };
};

export {
  TETROMINOS,
  getRandomPiece,
  hasCollision,
  createEmptyGrid,
  rotatePiece,
};

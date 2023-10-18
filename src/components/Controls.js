import React, { useEffect } from "react";

const Controls = ({ movePiece, rotate }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowLeft") movePiece(-1, 0);
      if (e.key === "ArrowRight") movePiece(1, 0);
      if (e.key === "ArrowDown") movePiece(0, 1);
      if (e.key === "ArrowUp") rotate(); // Use ArrowUp key for rotation
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [movePiece, rotate]);

  return (
    <div>
      <button onClick={() => movePiece(-1, 0)}>Left</button>
      <button onClick={() => movePiece(1, 0)}>Right</button>
      <button onClick={() => movePiece(0, 1)}>Down</button>
      <button onClick={rotate}>Rotate</button>
    </div>
  );
};

export default Controls;

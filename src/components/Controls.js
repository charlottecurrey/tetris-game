import React, { useEffect } from "react";

const Controls = ({ movePiece }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowLeft") movePiece(-1, 0);
      if (e.key === "ArrowRight") movePiece(1, 0);
      if (e.key === "ArrowDown") movePiece(0, 1);
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [movePiece]);

  return <div>{/* Additional buttons or UI controls can be added here */}</div>;
};

export default Controls;

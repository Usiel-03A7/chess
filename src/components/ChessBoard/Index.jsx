import React from "react";

const ChessBoard = () => {
  const rows = 8;
  const cols = 8;
  const board = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isWhite = (row + col) % 2 === 0;
      board.push(
        <div
          key={`${row}-${col}`}
          className={`w-16 h-16 ${isWhite ? "bg-white" : "bg-gray-800"}`}
        ></div>
      );
    }
  }

  return <div className="grid grid-cols-8">{board}</div>;
};

export default ChessBoard;

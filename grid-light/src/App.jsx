import React, { useState } from "react";
import "./App.css";

export default function App() {
  const initialGrid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const [grid, setGrid] = useState(initialGrid);

  const handleClick = (rowIndex, colIndex) => {
    const newGrid = grid.map((row) => [...row]);

    const toggleCell = (r, c) => {
      // FIXED VERSION
      if (r >= 0 && r < 3 && c >= 0 && c < 3) {
        newGrid[r][c] = newGrid[r][c] === 1 ? 0 : 1;
      }
    };

    // toggle clicked and neighbors
    toggleCell(rowIndex, colIndex);     // center
    toggleCell(rowIndex - 1, colIndex); // top
    toggleCell(rowIndex + 1, colIndex); // bottom
    toggleCell(rowIndex, colIndex - 1); // left
    toggleCell(rowIndex, colIndex + 1); // right

    setGrid(newGrid);
  };

  return (
    <div className="App">
      <h3>Grid Light</h3>
      <div className="grid-container">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`grid-cell ${cell === 1 ? "active" : ""}`}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

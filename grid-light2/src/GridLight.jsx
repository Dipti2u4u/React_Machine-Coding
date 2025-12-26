import React, { useState } from "react";

const GridLight = () => {
  const initialGrid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const [grid, setGrid] = useState(initialGrid);
  const [sequence, setSequence] = useState([]);

  const handleClick = (row, col) => {
    const newGrid = grid.map((r) => [...r]);
    const key = `${row}-${col}`;
    const index = sequence.findIndex((item) => item === key);

    // CASE 1: First time clicking -> turn ON (green)
    if (index === -1) {
      newGrid[row][col] = 1; // turn on
      setGrid(newGrid);
      setSequence([...sequence, key]);
      return;
    }
    // CASE 2: Undo (reverse)
    const cellsToUndo = sequence.slice(0, index + 1).reverse();

    cellsToUndo.forEach((cellKey, i) => {
      setTimeout(() => {
        // Flash effect (yellow)
        setGrid((prev) => {
          const updated = prev.map((r) => [...r]);
          const [r, c] = cellKey.split("-").map(Number);
          updated[r][c] = 2; // 2 = flashing (yellow)
          return updated;
        });

        // After flash, turn grey
        setTimeout(() => {
          setGrid((prev) => {
            const updated = prev.map((r) => [...r]);
            const [r, c] = cellKey.split("-").map(Number);
            updated[r][c] = 0; // turn OFF
            return updated;
          });
        }, 200);
      }, i * 300); // delay each flash step
    });

    // update sequence AFTER animation ends
    setTimeout(() => {
      setSequence(sequence.slice(index + 1));
    }, cellsToUndo.length * 300);
  };

  return (
    <div>
      <h2>Grid Light</h2>

      <div className="grid-container">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`grid-cell 
                ${cell === 1 ? "active" : ""} 
              `}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default GridLight;

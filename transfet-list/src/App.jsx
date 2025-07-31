import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [availableItems, setAvailableItems] = useState([
    "Item A",
    "Item B",
    "Item C",
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [checkedAvailable, setCheckedAvailable] = useState([]);
  const [checkedSelected, setCheckedSelected] = useState([]);

  const moveToSelected = () => {
    setSelectedItems([...selectedItems, ...checkedAvailable]);
    setAvailableItems(
      availableItems.filter((item) => !checkedAvailable.includes(item))
    );
    setCheckedAvailable([]);
  };

  const moveToAvailable = () => {
    setAvailableItems([...availableItems, ...checkedSelected]);
    setSelectedItems(
      selectedItems.filter((item) => !checkedSelected.includes(item))
    );
    setCheckedSelected([]);
  };

  const handleAvailableCheck = (item) => {
    setCheckedAvailable((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSelectedCheck = (item) => {
    setCheckedSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="App">
      <h1>Transfer List</h1>
      <div className="container" style={{ display: "flex", gap: "2rem" }}>
        {/* Available List */}
        <div>
          <h2>Available</h2>
          {availableItems.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkedAvailable.includes(item)}
                onChange={() => handleAvailableCheck(item)}
              />
              {item}
            </div>
          ))}
        </div>

        {/* Transfer Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <button onClick={moveToAvailable}>←</button>
          <button onClick={moveToSelected}>→</button>
        </div>

        {/* Selected List */}
        <div>
          <h2>Selected</h2>
          {selectedItems.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkedSelected.includes(item)}
                onChange={() => handleSelectedCheck(item)}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


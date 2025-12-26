import React, { useState } from "react"

const Progressbar = () => {
  const [progress, setProgress] = useState(0);

  const handleIncrement = () => {
    setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
  };

  const handleDecrement = () => {
    setProgress((prev) => (prev <= 0 ? 0 : prev - 10));
  };

  const getColorClass = () => {
    if (progress < 40) return "red";
    if (progress < 80) return "yellow";
    return "green";
  };

  return (
    <div className="main-container">
      <h2>Simple Progressbar</h2>

      <div className="wrapper">
        <div
          className={`progress-fill ${getColorClass()}`}
          style={{ width: `${progress}%` }}
        >
          <span className="progress-text">{progress}%</span>
        </div>
      </div>

      <div className="btn">
        <button onClick={handleIncrement}>+10%</button>
        <button onClick={handleDecrement}>-10%</button>
      </div>
    </div>
  );
};

export default Progressbar;

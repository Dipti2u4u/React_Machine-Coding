import React from "react";
import "./Bar.css";

const Progressbar = ({ progress }) => {
  return (
    <div className="wrapper">
      {progress.map((bar, index) => (
        <div className="outer" key={index}>
          <div className="inner" style={{ width: `${bar}%` }}>
            {bar}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progressbar;

import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    let timer;

    if (light === "red") {
      timer = setTimeout(() => setLight("yellow"), 3000);
    } else if (light === "yellow") {
      timer = setTimeout(() => setLight("green"), 1000);
    } else if (light === "green") {
      timer = setTimeout(() => setLight("red"), 2000);
    }

    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div className="App">
      <h2>Traffic Light</h2>
      <div className="light-container">
        <div className={`circle ${light === "red" ? "red-on" : ""}`}></div>
        <div
          className={`circle ${light === "yellow" ? "yellow-on" : ""}`}
        ></div>
        <div className={`circle ${light === "green" ? "green-on" : ""}`}></div>
      </div>
    </div>
  );
}

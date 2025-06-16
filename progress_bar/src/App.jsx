import React from "react";
import Progressbar from "../src/Components/Progressbar";


export default function App() {
  const progressData = [20, 50, 80];

  return (
    <div className="App">
      <h1>Dynamic Progress Bars</h1>
      <Progressbar progress={progressData} />
    </div>
  );
}


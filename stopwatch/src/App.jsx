// import React, { useState, useRef, useEffect } from "react";

// export default function App() {
//   const [seconds, setSeconds] = useState(0);
//   const intervalRef = useRef(null);

//   const handleStart = () => {
//     if (intervalRef.current) return;
//     intervalRef.current = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//   };

//   const handleStop = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };

//   const handleReset = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//     setSeconds(0);
//   };

//   // 🧹 Cleanup on unmount to avoid memory leak
//   useEffect(() => {
//     return () => {
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>Timer : {seconds}s</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

 /*-----------------------------Advanced Version--------------------------    */
import React, { useState, useRef } from "react";

export default function App() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef(null)

  const formatTimer = (miliseconds) => {
    let seconds = Math.floor(miliseconds / 1000)
    let milisec = Math.floor(miliseconds % 1000)

    let hr = Math.floor(seconds / 3600)
    let mns = Math.floor((seconds % 3600) / 60)
    let sec = Math.floor(seconds % 60)

    return [
      hr.toString().padStart(2, "0"),
      mns.toString().padStart(2, "0"),
      sec.toString().padStart(2, "0"),
      milisec.toString().padStart(3, "0")
    ].join(":")
  }

  const handleStart = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 10)
    }, 10)
  }

  const handlePause = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }
  const handleReset = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setTimer(0)
  }

  return (
    <div className="App">
      <h3>Stop Watch</h3>
      <h5> {formatTimer(timer)} </h5>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

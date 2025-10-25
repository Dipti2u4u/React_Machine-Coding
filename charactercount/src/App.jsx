// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [text, setText] = useState("");
//   const [charCount, setCharCount] = useState({});

//   useEffect(() => {
//     if (text === "") return;
//     let newText = text.trim();
//     let result = {};
//     for (let char of newText) {
//       if (result[char]) {
//         result[char] += 1;
//       } else {
//         result[char] = 1;
//       }
//     }
//     setCharCount(result);
//   }, [text]);
//   return (
//     <div className="App">
//       <h2>Character Frequency Counter</h2>
//       <textarea
//         type="text"
//         placeholder="Type anything..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       ></textarea>
//       <h3>Character Counts:</h3>
//       <pre>{JSON.stringify(charCount)}</pre>
//     </div>
//   );
// }



/* --------------------------Optimized with useMemo ----------------*/
import React, { useState, useMemo } from "react";

function CharFrequencyCounter() {
  const [text, setText] = useState("");

  // useMemo to optimize performance (only re-calc when text changes)
  const charCount = useMemo(() => {
    const freq = {};
    for (let char of text) {
      if(freq[char]){
        freq[char] += 1
      }else{
        freq[char] = 1
      }
    }
    return freq;
  }, [text]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Real-time Character Frequency Counter</h2>

      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <h3>Character Counts:</h3>
      <pre>{JSON.stringify(charCount, null, 2)}</pre>
    </div>
  );
}

export default CharFrequencyCounter;






// import "./styles.css";
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [text, setText] = useState("");
//   const [result, setResult] = useState("");

//   // useEffect(() => {
//   //   const charCount = () => {
//   //     let item = {};
//   //     for (let char of text.trim()) {
//   //       if (char !== "") {
//   //         if (!item[char]) {
//   //           item[char] = 1;
//   //         } else {
//   //           item[char] += 1;
//   //         }
//   //       }
//   //     }
//   //     setResult(item);
//   //   };
//   //   charCount();
//   // }, [text]);

//   useEffect(() => {
//     const wordCount = () => {
//       const item = {};
//       const words = text.trim().split(/\s+/); // split text into words

//       for (let word of words) {
//         if (word !== "") {
//           // optional: make it case-insensitive
//           word = word.toLowerCase();

//           if (!item[word]) {
//             item[word] = 1;
//           } else {
//             item[word] += 1;
//           }
//         }
//       }
//       setResult(item);
//     };

//     wordCount();
//   }, [text]);
//   return (
//     <div className="App">
//       <h2>Character Count</h2>
//       <div className="main-container">
//         <textarea
//           placeholder="Type Something ..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         ></textarea>
//         <div className="result-container">
//           <h5>Result : </h5>
//           <span>{JSON.stringify(result, null, 2)}</span>
//         </div>
//       </div>
//     </div>
//   );
// }


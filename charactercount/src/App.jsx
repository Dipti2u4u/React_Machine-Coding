// import React, { useEffect, useState } from "react";

// export default function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [charCount, setCharCount] = useState({});

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   useEffect(() => {
//     if (inputValue.trim() === "") return;
//     let newText = inputValue.trim();
//     let map = {};
//     for (let char of newText) {
//       if (!map[char]) {
//         map[char] = 1;
//       } else {
//         map[char] += 1;
//       }
//     }
//     setCharCount(map);
//   }, [inputValue]);

//   return (
//     <div className="App">
//       <h2>Character Counter</h2>
//       <textarea
//         placeholder="Type Something..."
//         value={inputValue}
//         onChange={handleChange}
//       />
//       <h3>Result</h3>
//       {/* <p>{JSON.stringify(charCount)}</p> */}
//       {Object.keys(charCount).length === 0 ? (
//         <p>No Charcters Yet...</p>
//       ) : (
//         <ul>
//           {Object.entries(charCount).map(([char, count]) => (
//             <li key={char}>
//               <strong>{char}</strong> : {count}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }




//Character count Advanced

import React, { useEffect, useState, useMemo } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [char, setChar] = useState({});

  useEffect(() => {
    const newValue = inputValue.toLowerCase().replace(/\s+/g, "");

    let hashmap = {};

    for (let item of newValue) {
      hashmap[item] = (hashmap[item] || 0) + 1;
    }

    setChar(hashmap);
  }, [inputValue]);

  // 2️⃣ total characters
  const totalCharacters = useMemo(() => {
    return Object.values(char).reduce((sum, val) => sum + val, 0);
  }, [char]);

  // 3️⃣ sorted characters (by frequency only)
  const sortedCharacters = useMemo(() => {
    return Object.entries(char).sort(([a, countA], [b, countB]) => {
      if (countB !== countA) return countB - countA; // highest first
      return a.localeCompare(b); // tie-break
    });
  }, [char]);

  return (
    <div className="App">
      <h3>Character Counting</h3>

      <textarea
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h4>Total Characters (excluding spaces): {totalCharacters}</h4>

      <h3>Character Frequency</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedCharacters.map(([character, count]) => (
          <li key={character} style={{ marginBottom: "8px" }}>
            <strong>{character}</strong> : {count}
            <div
              style={{
                height: "8px",
                width: `${count * 20}px`,
                background: "#4caf50",
                marginTop: "4px",
                borderRadius: "4px",
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}







// import React, { useEffect, useState } from "react";

// export default function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [text, setText] = useState({});
//   const [sortedWords, setSortedWords] = useState([]);

//   function wordCounter() {
//     if (inputValue.trim() === "") {
//       setText({});
//       setSortedWords([]);
//       return;
//     }
//     let words = inputValue.trim().toLowerCase().split(/\s+/);
//     let map = {};
//     for (let word of words) {
//       if (!map[word]) {
//         map[word] = 1;
//       } else {
//         map[word] += 1;
//       }
//     }
//     //convert to array for sorting
//     let sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
//     setText(map);
//     setSortedWords(sorted);
//   }
//   useEffect(() => {
//     wordCounter();
//   }, [inputValue]);

//   return (
//     <div className="App">
//       <h3>Word Counter</h3>
//       <textarea
//         placeholder="Type Something..."
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h4>Result</h4>
//       {sortedWords.map(([word, count]) => (
//         <p key={word}>
//           {word} : {count}
//         </p>
//       ))}
//     </div>
//   );
// }

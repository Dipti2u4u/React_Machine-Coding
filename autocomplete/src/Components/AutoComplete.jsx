// import React, { useState, useEffect } from "react";
// import "./Autostyle.css"

// const AutoComplete = () => {
//   const [recipies, setRecipies] = useState([]);
//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/recipes");
//       const jsonData = await response.json();
//       console.log(jsonData);
//       setRecipies(jsonData.recipes)
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div className="main">
//       <h3>This is a AutoComplete Inputbox</h3>
//       <input
//       className="input_box"
//         type="text"
//         placeholder="Search Recipe"
//       />
//       <div className="receipe-lists">
//           {recipies.map((items)=>(
//             <span key={items.id}>{items.name}</span>
//           ))}
//       </div>
//     </div>
//   );
// }; 
// export default AutoComplete;



/*-----------------from Akshay Saini ----------------*/

import { useEffect, useState } from "react";
import "./Autostyle.css"

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      console.log("Data from cache:", input);
      return;
    }
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const jsonData = await data.json();
    setResults(jsonData?.recipes);
    setCache((prev) => ({ ...prev, [input]: jsonData?.recipes }));
    console.log(jsonData);
  };

  useEffect(() => {
    if (input.trim() === "") {
      setResults([]);
      return;
    }
    const debounceTimer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [input]);

  return (
    <div className="App">
      <h2>AutoComplete in React</h2>
      <div>
        <input
          placeholder="Search recipes"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={(e) => setShowResults(true)}
          onBlur={(e) => setShowResults(false)}
        />
        {showResults && results.length > 0 && (
          <div className="result-container">
            {results.map((r) => (
              <span className="result" key={r.id}>
                {r.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
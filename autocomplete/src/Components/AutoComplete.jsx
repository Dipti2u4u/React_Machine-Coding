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

// import { useEffect, useState } from "react";
// import "./Autostyle.css"

// export default function App() {
//   const [input, setInput] = useState("");
//   const [results, setResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const [cache, setCache] = useState({});

//   const fetchData = async () => {
//     if (cache[input]) {
//       setResults(cache[input]);
//       console.log("Data from cache:", input);
//       return;
//     }
//     const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
//     const jsonData = await data.json();
//     setResults(jsonData?.recipes);
//     setCache((prev) => ({ ...prev, [input]: jsonData?.recipes }));
//     console.log(jsonData);
//   };

//   useEffect(() => {
//     if (input.trim() === "") {
//       setResults([]);
//       return;
//     }
//     const debounceTimer = setTimeout(() => {
//       fetchData();
//     }, 300);
//     return () => clearTimeout(debounceTimer);
//   }, [input]);

//   return (
//     <div className="App">
//       <h2>AutoComplete in React</h2>
//       <div>
//         <input
//           placeholder="Search recipes"
//           className="search-input"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onFocus={(e) => setShowResults(true)}
//           onBlur={(e) => setShowResults(false)}
//         />
//         {showResults && results.length > 0 && (
//           <div className="result-container">
//             {results.map((r) => (
//               <span className="result" key={r.id}>
//                 {r.name}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// } 



/*-----------------Enhanced Version3 YOE----------------*/
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Autostyle.css";

// ✅ Custom debounce hook
function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const inputRef = useRef(null);

  // useDebounce to avoid calling API on every keystroke
  const debouncedInput = useDebounce(inputValue, 400);

  // Fetch data when debounced value changes
  useEffect(() => {
    if (debouncedInput.trim() === "") {
      setData([]);
      setShowResults(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://dummyjson.com/recipes/search?q=${debouncedInput}`
        );
        const recipes = response.data.recipes || [];
        setData(recipes);
        setShowResults(true);
      } catch (err) {
        setError("Failed to fetch data");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedInput]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showResults || data.length === 0) return;

    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) => (prev + 1) % data.length);
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => (prev <= 0 ? data.length - 1 : prev - 1));
    } else if (e.key === "Enter") {
      if (highlightIndex >= 0) {
        const selected = data[highlightIndex];
        setInputValue(selected.name);
        setShowResults(false);
      }
    } else if (e.key === "Escape") {
      setShowResults(false);
    }
  };

  const handleSelect = (item) => {
    setInputValue(item.name);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h2>Autocomplete SearchBox</h2>
      <div className="main-container">
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search a recipe..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => data.length > 0 && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 150)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {loading && <p className="info-text">Loading...</p>}
        {error && <p className="error-text">{error}</p>}
        {!loading && !error && showResults && (
          <div className="result-container">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div
                  key={item.id}
                  className={`result-item ${
                    index === highlightIndex ? "highlighted" : ""
                  }`}
                  onMouseDown={() => handleSelect(item)} // use onMouseDown to prevent blur
                >
                  {item.name}
                </div>
              ))
            ) : (
              <div className="no-result">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

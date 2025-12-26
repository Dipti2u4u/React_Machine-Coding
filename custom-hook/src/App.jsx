import React, { useState } from "react";
import { useFetch } from "./useFetch";
import { useDebounce } from "./useDebounce";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const debouncedSearch = useDebounce(inputValue, 500);

  const { data, loading, error } = useFetch(
    debouncedSearch
      ? `https://dummyjson.com/recipes/search?q=${debouncedSearch}`
      : null
  );

  return (
    <div className="App">
      <h2>Autocomplete Recipes</h2>

      <input
        type="text"
        placeholder="Search recipes..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

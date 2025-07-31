import "./index.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectItem, setSelectItem] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (inputValue.trim() === "") {
        setUser([]);
        setShowResult(false);
        return;
      }
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/search?q=${inputValue}`
        );
        setUser(response.data.users);
        setShowResult(true);
      } catch (err) {
        console.log("Error fetching user data", err);
      }
    };
    fetchUserData();
  }, [inputValue]);

  const handleSelect = (item) => {
    const exists = selectItem.find((user) => user.id === item.id);
    if (!exists) {
      setSelectItem((prev) => [...prev, item]);
    }
    setInputValue("");
    setUser([]);
    setShowResult(false);
  };

  return (
    <div className="main-container">
      <div className="input-container">
        {selectItem.map((item) => (
          <span key={item.id}>
            {item.firstName}
            <span className="remove-btn">&times;</span>
          </span>
        ))}
        <input
          type="text"
          placeholder="Search ..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setShowResult(true);
          }}
        />
      </div>
      {showResult && (
        <div className="result-container">
          {user.map((item) => (
            <span onClick={() => handleSelect(item)} key={item.id}>
              {item.firstName}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
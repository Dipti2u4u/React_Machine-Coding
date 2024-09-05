import React, { useState } from "react";
import "../App.css";

const TodoInput = ({addTask}) => {
  const [inputValue,setInputValue] = useState('')
  const handleInput = (e)=>{
    setInputValue(e.target.value)
  }
  const handleAddTask = ()=>{
    addTask(inputValue)
    setInputValue('')
  }
  return (
    <>
      <input
        className="input_style"
        type="text"
        placeholder="Enter your Task"
        value={inputValue}
        onChange={handleInput}
      />
      <button className="add" onClick={handleAddTask}> + </button>
    </>
  );
};

export default TodoInput;

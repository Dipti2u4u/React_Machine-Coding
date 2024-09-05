import React from "react";
import '../App.css'

const TodoList = ({ task,deleteTask }) => {
  return (
    <>
      <ul>
        {task.map((items, index) => (
          <li key={index}>
            {items}
            <button onClick={()=>deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

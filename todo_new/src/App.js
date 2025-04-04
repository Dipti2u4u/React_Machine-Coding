import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask([...task, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTask(task.filter((_, index) => index !== id));
  };

  const toggleTask = (index) => {
    const updateTask = task.map((item, id) =>
      id === index ? { ...item, completed: !item.completed } : item
    );
    setTask(updateTask);
  };
  return (
    <div className="container">
      <div className="outer-box">
        <div className="inner-box">
          <h2>Todo App</h2>
          <div className="input-task">
            <input
              type="text"
              placeholder="Enter Task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>
          <div className="item-list">
            <ul>
              {task.map((item, index) => (
                <li
                  key={index}
                  className={item.completed ? "completed-task" : ""}
                >
                  <input
                    type="checkbox"
                    value={item.completed}
                    onChange={() => toggleTask(index)}
                  />
                  <span>{item.text}</span>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


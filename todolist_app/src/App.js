import React, { useState } from 'react'
import TodoInput from './Components/TodoInput'
import './App.css'
import TodoList from './Components/TodoList'

const App = () => {
  const [task,setTask] = useState([])

  const addTask = (newTask)=>{
    setTask([...task,newTask])
  }

  const deleteTask = (taskIndex)=>{
    let updateTask = task.filter((_,index)=> index!== taskIndex)
    setTask(updateTask)
  }

  return (
    <>
    <div className='main_container'>
      <div className='sub_subcontainer'>
        <TodoInput addTask={addTask}/>
        <TodoList task={task} deleteTask={deleteTask}/>
      </div>
    </div>
    </>
  )
}

export default App

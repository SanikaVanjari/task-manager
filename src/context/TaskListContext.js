import React, { createContext, useState } from "react"
import { v4 as uuid } from "uuid"

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "Read Book", id: 1 },
    { title: "Clean Car", id: 2 },
    { title: "Read Book", id: 3 },
  ])

  // Add tasks
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }])
  }

  // Remove tasks
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask }}>
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider

import React, { createContext, useState } from "react"

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "Read Book", id: 1 },
    { title: "Clean Car", id: 2 },
    { title: "Read Book", id: 3 },
  ])

  const addTask = (title) => {
      setTasks([...tasks,{title}])
  }
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider

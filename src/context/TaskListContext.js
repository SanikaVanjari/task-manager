import React, { createContext, useState } from "react"
import { v4 as uuid } from "uuid"

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "Read Book", id: 1 },
    { title: "Clean Car", id: 2 },
    { title: "Read Book", id: 3 },
  ])

  const [editItem, setEditItem] = useState(null)

  // Add tasks
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }])
  }

  // Remove tasks
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const clearList = () => {
    setTasks([])
  }

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id)
    setEditItem(item)
  }

  const editTask = (title, id) => {
    const newtasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    )
    setTasks(newtasks)
    setEditItem(null)
  }
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editItem,
        editTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider

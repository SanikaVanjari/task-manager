import React, { useContext, useState } from "react"
import { TaskListContext } from "../context/TaskListContext"

const TaskForm = () => {
  const { addTask, clearList } = useContext(TaskListContext)

  const [title, setTitle] = useState("")

  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    addTask(title)
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Task.."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Task
        </button>
        <button onClick={clearList} className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm

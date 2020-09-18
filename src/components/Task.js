import React, { useContext } from "react"
import { TaskListContext } from "../context/TaskListContext"

function Task({ task }) {
  const { removeTask } = useContext(TaskListContext)
  return (
    <div>
      <li className="list-item">
        <span>{task.title}</span>
        <div>
          <button
            onClick={() => removeTask(task.id)}
            className="btn-delete task-btn"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button className="btn-edit task-btn">
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </li>
    </div>
  )
}

export default Task

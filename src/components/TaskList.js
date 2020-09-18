import React, { useContext } from "react"
import { TaskListContext } from "../context/TaskListContext"
import Task from "./Task"

function TaskList() {
  const { tasks } = useContext(TaskListContext)
  return (
    <div>
      <ul className="list">
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </ul>
    </div>
  )
}

export default TaskList

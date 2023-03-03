import React, { useState } from 'react'

export const useTasks = () => {
  const [task, setTask] = useState({
    id: 1,
    name: "",
    description: "",
    date: new Date().toLocaleDateString(),
  });

  const [tasksList, setTasksList] = useState([])

  const createTask = (task) => {
    const id = new Date().valueOf();
    task.id = id
    setTasksList((tasks) => [...tasks, task])
  }
  const deleteTask = (id) => {
    const taskIndex = tasksList.findIndex(task => task?.id === id)
    const newTasks = [...tasksList]
    newTasks.splice(taskIndex, 1)
    setTasksList(newTasks)
  }
  return {
    //individual task
    task,
    setTask,
    //all tasks
    tasksList,
    setTasksList,
    //tasks functions
    createTask, 
    deleteTask,
  }
}

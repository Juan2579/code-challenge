import React, {createContext} from 'react'
import { useTasks } from '../hooks/useTasks'

export const TaskContext = createContext()

export const TasksProvider = ({children}) => {
  const {task, setTask, tasksList, setTasksList, deleteTask, createTask} = useTasks()
  return (
    <TaskContext.Provider 
      value={{
        task, 
        setTask, 
        tasksList, 
        setTasksList, 
        deleteTask, 
        createTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}


import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { initialTodos } from '../initialTodos'
import Task from '../shared/models/Task.model'

const TaskContext = createContext<Task[]>([])
const SetTasksContext = createContext<Dispatch<SetStateAction<Task[]>>>(
  () => null,
)
const TaskDescriptionContext = createContext<string>('')
const SetTaskDescriptionContext = createContext<
  Dispatch<SetStateAction<string>>
>(() => null)

const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState(initialTodos)
  const [taskDescription, setTaskDescription] = useState<string>('')

  return (
    <TaskContext.Provider value={tasks}>
      <SetTasksContext.Provider value={setTasks}>
        <TaskDescriptionContext.Provider value={taskDescription}>
          <SetTaskDescriptionContext.Provider value={setTaskDescription}>
            {children}
          </SetTaskDescriptionContext.Provider>
        </TaskDescriptionContext.Provider>
      </SetTasksContext.Provider>
    </TaskContext.Provider>
  )
}

export {
  TaskProvider,
  TaskContext,
  SetTasksContext,
  TaskDescriptionContext,
  SetTaskDescriptionContext,
}

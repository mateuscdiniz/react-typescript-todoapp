import React, { ChangeEvent, FormEvent, useContext, useEffect } from 'react'
import TaskCompletionHandler from '../../../shared/models/TaskCompletionHandler.model'

import TaskModel from '../../../shared/models/Task.model'
import { v4 as uuidv4 } from 'uuid'

import Task from '../Task/Task'

import {
  Form,
  FormInputStyled,
  SaveButtonStyled,
  TasksStyled,
} from './Tasks.styled'
import {
  TaskContext,
  SetTasksContext,
  TaskDescriptionContext,
  SetTaskDescriptionContext,
} from '../../../contexts/taskContext'

const Tasks: React.FC = () => {
  const tasks = useContext(TaskContext)
  const setTasks = useContext(SetTasksContext)
  const taskDescription = useContext(TaskDescriptionContext)
  const setTaskDescription = useContext(SetTaskDescriptionContext)

  useEffect(() => {
    const data = localStorage.getItem('task')
    if (data) {
      setTasks(JSON.parse(data))
    }
  }, [setTasks])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  })

  const toggleComplete: TaskCompletionHandler = (selectedTask: TaskModel) => {
    const updatedTasks = tasks.map((task) => {
      if (task === selectedTask) {
        return { ...task, isDone: !task.isDone }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    taskDescription.trim() !== '' &&
      setTasks([
        ...tasks,
        { id: uuidv4(), description: taskDescription, isDone: false },
      ])

    console.log(tasks)

    setTaskDescription('')
  }

  return (
    <>
      <Form data-testid="label-form" onSubmit={handleSubmit}>
        <FormInputStyled
          placeholder="Add task"
          data-testid="input-form"
          type="text"
          value={taskDescription}
          onChange={handleChange}
        />
        <SaveButtonStyled data-testid="form-btn" type="submit">
          Add
        </SaveButtonStyled>
      </Form>
      <TasksStyled data-testid="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} toggleComplete={toggleComplete} />
        ))}
      </TasksStyled>
    </>
  )
}

export default Tasks

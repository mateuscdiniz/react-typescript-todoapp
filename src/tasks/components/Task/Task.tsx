import React from 'react'

import './Task.styled.ts'
import TaskProps from './TaskProps.model'
import {
  LabelStyled,
  TaskInputStyled,
  TaskStyled,
  TextStyled,
} from './Task.styled'

const Task: React.FC<TaskProps> = ({ task, toggleComplete }) => {
  const handleChange = () => {
    toggleComplete(task)
  }

  return (
    <TaskStyled>
      <LabelStyled>
        <TaskInputStyled
          type="checkbox"
          onChange={handleChange}
          checked={task.isDone}
        />
        <TextStyled isDone={task.isDone}>{task.description}</TextStyled>
      </LabelStyled>
    </TaskStyled>
  )
}

export default Task

import React, { useContext } from 'react'

import './Task.styled.ts'
import TaskProps from './TaskProps.model'
import {
  LabelStyled,
  TaskInputStyled,
  TaskStyled,
  TextStyled,
  RemoveButtonStyled,
} from './Task.styled'
import { SetTasksContext, TaskContext } from '../../../contexts/taskContext'
import CloseIcon from '../../../shared/icons/CloseIcon/CloseIcon'
import ControlsContainer from '../../../shared/components/ControlsContainer/ControlsContainer.styled'

const Task: React.FC<TaskProps> = ({ task, toggleComplete }) => {
  const tasks = useContext(TaskContext)
  const setTasks = useContext(SetTasksContext)

  const handleChange = () => {
    toggleComplete(task)
  }
  function handleDelete(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <TaskStyled>
      <LabelStyled>
        <TaskInputStyled
          type="checkbox"
          onChange={handleChange}
          checked={task.isDone}
        />
        <TextStyled isDone={task.isDone}>{task.description} </TextStyled>
      </LabelStyled>
      <ControlsContainer>
        <RemoveButtonStyled type="button" onClick={() => handleDelete(task.id)}>
          <CloseIcon hoverColor="#40F99B" />
        </RemoveButtonStyled>
      </ControlsContainer>
    </TaskStyled>
  )
}

export default Task

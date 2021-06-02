import styled from 'styled-components'

interface TaskStyledProps {
  isDone: boolean
}

const LabelStyled = styled.label({
  fontSize: '20px',
})
const TaskInputStyled = styled.input({
  marginRight: '15px',
  transform: 'scale(1.1)',
  cursor: 'pointer',
})
const TaskStyled = styled.li({
  listStyleType: 'none',
  paddingBottom: '20px',
  borderBottom: '4px solid #fff',
  marginBottom: '1.5rem',
})

const TextStyled = styled.span<TaskStyledProps>(({ isDone }) => {
  return {
    textDecoration: isDone ? 'line-through' : 'none',
  }
})

export { LabelStyled, TaskInputStyled, TaskStyled, TextStyled }

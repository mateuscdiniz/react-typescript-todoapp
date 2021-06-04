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
  display: 'flex',
  justifyContent: 'space-between',
  listStyleType: 'none',
  paddingBottom: '20px',
  borderBottom: '4px solid #fff',
  marginBottom: '1.5rem',
  cursor: 'pointer',
})

const RemoveButtonStyled = styled.button({
  fontWeight: 'bold',
  outline: 'none',
  border: 'none',
  height: '20px',
  borderRadius: '25px',
  width: '60px',
  backgroundColor: '#61707D',
  color: 'black',
  cursor: 'pointer',
  transition: '.10s',
  marginLeft: '31vh',
})

const TextStyled = styled.span<TaskStyledProps>(({ isDone }) => {
  return {
    textDecoration: isDone ? 'line-through' : 'none',
    cursor: 'pointer',
  }
})

export {
  LabelStyled,
  TaskInputStyled,
  TaskStyled,
  TextStyled,
  RemoveButtonStyled,
}

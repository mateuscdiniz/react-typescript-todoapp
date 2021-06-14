import styled from 'styled-components'

interface TaskStyledProps {
  isDone: boolean
}

const LabelStyled = styled.label({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  cursor: 'pointer',
})
const TaskInputStyled = styled.input({
  transform: 'scale(1.5)',
  cursor: 'pointer',
  margin: '0 12px',
})
const TaskStyled = styled.li({
  display: 'flex',
  padding: '10px',
  listStyleType: 'none',
  borderRadius: '4px',
  backgroundColor: 'rgb(0,0,0,0.05)',
  margin: '15px 0',
  '&:hover': {
    backgroundColor: 'rgb(0,0,0,0.10)',
  },
})

const RemoveButtonStyled = styled.button({
  backgroundColor: 'transparent',
  path: {
    transition: '.02s ease all',
  },
  '&:hover': {
    path: {
      fill: '#40F99B',
    },
  },
})

const TextStyled = styled.span<TaskStyledProps>(({ isDone }) => {
  return {
    paddingBottom: '2px',
    fontSize: '20px',
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

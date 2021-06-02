import styled from 'styled-components'

const TasksStyled = styled.ul({
  flexDirection: 'column-reverse',
  color: '#40F99B',
})

const Form = styled.form({
  marginBottom: '40px',
})

const FormInputStyled = styled.input({
  padding: '0.5rem 1rem',
  outline: 'none',
  border: 'none',
  height: '30px',
  borderRadius: '25px',
  width: '350px',
  marginLeft: '48px',
  transition: '.5s',
  fontSize: '1.15rem',
})

const SaveButtonStyled = styled.button({
  fontWeight: 'bold',
  outline: 'none',
  border: 'none',
  height: '50px',
  borderRadius: '25px',
  width: '50px',
  backgroundColor: '#40F99B',
  color: 'black',
  cursor: 'pointer',
  transition: '.10s',
  marginLeft: '10px',
})

export { TasksStyled, Form, FormInputStyled, SaveButtonStyled }

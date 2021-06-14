import styled from 'styled-components'

const FooterStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '15px',
  fontFamily: 'Ubuntu Bold ',
  color: '#F5FBEF',

  a: {
    '&:hover': {
      color: '#40F99B',
      transition: '.2s ease all',
    },
  },
})

export default FooterStyled

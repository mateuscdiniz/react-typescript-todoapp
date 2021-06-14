import styled from 'styled-components'

const FooterStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontFamily: 'Ubuntu Regular',
  color: '#F5FBEF',
  '&:hover': {
    pre: {
      a: {
        color: '#40F99B',
        transition: '.2s ease all',
      },
    },
  },
})

export default FooterStyled

import React from 'react'
import { ReactIcon } from '../../../shared/icons'
import FooterStyled from './Footer.styled'

const Footer: React.FC = () => {
  return (
    <FooterStyled data-testid="footer">
      <ReactIcon />
    </FooterStyled>
  )
}

export default Footer

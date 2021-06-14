import React from 'react'
import { ReactIcon } from '../../../shared/icons'
import FooterStyled from './Footer.styled'

const Footer: React.FC = () => {
  return (
    <FooterStyled data-testid="footer">
      Created with <ReactIcon /> by{'  '}
      <pre>
        <a href="http://www.github.com/mateuscdiniz"> Mateus César</a>
      </pre>
    </FooterStyled>
  )
}

export default Footer

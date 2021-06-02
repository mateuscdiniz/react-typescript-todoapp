import { createGlobalStyle } from 'styled-components'
import { fontFaces } from './assets/fonts/fonts'

const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  body {
    height: 100%;
    background-color: #61707D;
    font-family: 'Ubuntu';
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
  }
`
export default GlobalStyle

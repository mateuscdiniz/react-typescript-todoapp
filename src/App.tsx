import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Container from './App.model'
import { TaskProvider } from './contexts/taskContext'
import globalStyles from './global-styles/index.scss'

import { Home, Header, Footer } from './core/components'
import { ContainerStyled } from './shared/components'

const GlobalStyle = createGlobalStyle`${globalStyles}`

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <TaskProvider>
          <ContainerStyled>
            <Home />
          </ContainerStyled>
        </TaskProvider>
        <ContainerStyled>
          <Footer />
        </ContainerStyled>
      </Container>
    </>
  )
}

export default App

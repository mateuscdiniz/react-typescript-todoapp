import React from 'react'
import Container from './App.model'
import { TaskProvider } from './contexts/taskContext'

import { Home, Header, Footer } from './core/components'
import GlobalStyle from './GlobalStyles'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <TaskProvider>
          <Home />
        </TaskProvider>
      </Container>
      <Footer />
    </>
  )
}

export default App

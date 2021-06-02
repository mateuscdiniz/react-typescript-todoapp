import React from 'react'

import { Tasks } from '../../../tasks/components'

import HomeStyled from './Home.styled'

const Home: React.FC = () => {
  return (
    <HomeStyled>
      <Tasks />
    </HomeStyled>
  )
}

export default Home

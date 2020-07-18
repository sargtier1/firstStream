import * as React from 'react'
import styled from 'styled-components'
import { Box } from '../components/box'

const App = () => {
  return (
    <>
      <Title>hello there</Title>
      <Box bg='tomato' color='white' width={'250px'} height={'250px'} />
      <br />
      <Box bg='tomato' color='white' width={'250px'} height={'250px'}>
        Hello there
      </Box>
    </>
  )
}

export default App

const Title = styled.h1`
  color: red;
`

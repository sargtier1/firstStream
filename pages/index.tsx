import * as React from 'react'
import styled from 'styled-components'
import { Theme } from '../components/theme/index'
import { Box } from '../components/box'

const App = () => {
  const [show, setIsShow] = React.useState(false)

  return (
    <Theme>
      <Title>hello there</Title>
      <Box bg='tomato' color='white' width={'250px'} height={'250px'} />

      <br />

      <Box bg='secondary' color='white' width={'250px'} height={'250px'}>
        Hello there
      </Box>
    </Theme>
  )
}

export default App

const Title = styled.h1`
  color: red;
`

import * as React from 'react'
import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'
import { Theme } from '../components/theme/index'
import { Box } from '../components/box'
import { ThemeToggle } from '../components/themeToggle'

const App = () => {
  return (
    <Theme>
      <Box justifyContent='space-between' alignItems='center'>
        <Title color='text'>hello there</Title>

        <ThemeToggle type='primary' />
      </Box>

      <br />

      <Box
        p='1rem'
        bg='secondary'
        color='white'
        width={'250px'}
        height={'250px'}
      >
        Hello there
      </Box>
    </Theme>
  )
}

export default App

const Title = styled.h1<TypographyProps>`
  ${typography}
`

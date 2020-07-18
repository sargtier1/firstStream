import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../theme/global'
import { theme as baseTheme, modes } from '../../theme/theme'
import { get, merge } from 'lodash'

/*
import provider from './provider'
import storage from './storage'
*/


export const Theme: React.FC = ({ children }) => {

  console.log('theme', baseTheme)
  console.log('modes', modes)
  
  return (
    // theme provider from styled components
    <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
  )
}

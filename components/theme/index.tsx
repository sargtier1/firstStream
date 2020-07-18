import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../theme/global'
import { theme as baseTheme, modes } from '../../theme/theme'
import { get, merge } from 'lodash'
import AppThemeProvider from './provider'
import { themeStorage } from './storage'

export const Theme: React.FC = ({ children }) => {
  const [mode, setMode] = React.useState(modes[0])

  React.useEffect(() => {
    async function getMode() {
      const storedTheme = await themeStorage.get()
      //@ts-ignore
      setMode(storedTheme)
    }
    getMode()
  }, [])

  React.useEffect(() => {
    if (!mode) return
    themeStorage.set(mode)
  }, [mode])

  const toggleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
    console.log(mode)
  }

  const getTheme = (mode: string) =>
    merge({}, baseTheme, {
      colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
    })

  const theme = getTheme(mode)

  console.log('theme', theme)
  console.log('modes', modes)

  return (
    // theme provider from styled components
    <ThemeProvider theme={theme}>
      <AppThemeProvider toggleMode={toggleMode} mode={mode}>
        <GlobalStyles />
        {children}
      </AppThemeProvider>
    </ThemeProvider>
  )
}

import * as React from 'react'

interface ThemeProps {
  mode: string
  toggleMode: () => void
}

const ThemeContext = React.createContext<Partial<ThemeProps>>({
  mode: 'light',
  toggleMode: () => {},
})

export const useThemeContext = () => React.useContext(ThemeContext)

const AppThemeProvider: React.FC<ThemeProps> = ({ children, ...rest }) => {
  return (
    <ThemeContext.Provider value={{ ...rest }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default AppThemeProvider

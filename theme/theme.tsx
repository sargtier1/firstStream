import * as CSS from 'csstype'

interface BaseColors {
  100: CSS.ColorProperty
  200: CSS.ColorProperty
  300: CSS.ColorProperty
  400: CSS.ColorProperty
  500: CSS.ColorProperty
}

const baseColors: BaseColors = {
  100: '#EDF2EF',
  200: '#FF6347',
  300: '#D1D646',
  400: '#57C4E5',
  500: '#212738',
}

const theme = {
  colors: {
    text: '#373737',
    background: baseColors[100],
    primary: baseColors[200],
    secondary: baseColors[400],
    gray: '#eee',
    lightgray: '#fafafa',
    modes: {
      dark: {
        text: 'whitesmoke',
        background: baseColors[500],
        primary: baseColors[200],
        secondary: baseColors[400],
        gray: '#222',
        lightgray: '#111',
      },
      // other color modes...
    },
  },
}

const modes = Object.keys(theme.colors.modes).map((key) => key)

modes.unshift('light')

export { theme, modes }

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: any) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Montserrat, sans-serif;
    transition: all 0.50s linear;
    margin: 0;
    padding: 1rem;
    max-width: 2200px;
  }
`

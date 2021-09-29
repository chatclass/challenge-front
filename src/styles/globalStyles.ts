import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.secondary.yellow};
    background: linear-gradient(0deg,
      ${({ theme }) => theme.colors.secondary.yellow} 0%,
      ${({ theme }) => theme.colors.primary.orange} 100%) repeat-x;
    font-size: 1.25rem;
    font-family: 'Lato', sans-serif;
  }
`

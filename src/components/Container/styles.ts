import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.breakpoints.md};
    margin: 0 auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      width: 100%;
    }
  `}
`

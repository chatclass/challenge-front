import { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

const sizes = {
  sm: css`
    font-size: 0.875rem;
  `,
  md: css`
    font-size: 1rem;
  `,
  lg: css`
    font-size: 1.5rem;
  `,
  xl: css`
    font-size: 2.5rem;
  `,
  '2xl': css`
    font-size: 3.5rem;
  `,
  '3xl': css`
    font-size: 4.5rem;
  `
}

const types = {
  h1: css`
    ${sizes['3xl']}
    font-weight: 700;
  `,
  h2: css`
    ${sizes['2xl']}
    font-weight: 700;
  `,
  h3: css`
    ${sizes['xl']}
    font-weight: 700;
  `,
  h4: css`
    ${sizes['lg']}
    font-weight: 700;
  `,
  h5: css`
    ${sizes['md']}
    font-weight: 700;
  `,
  h6: css`
    ${sizes['sm']}
    font-weight: 700;
  `
}

const colors = {
  light: css`
    color: #ffffff;
  `,
  dark: css`
    color: #000000;
  `
}

export const Wrapper = styled(Fragment)<Omit<HeadingProps, 'children'>>`
  ${({ as, color }) => css`
    ${as && types[as]}
    ${color && colors[color]}
  `}
`

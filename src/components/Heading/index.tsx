import React, { ReactNode } from 'react'
import { Wrapper } from './styles'

type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Color = 'light' | 'dark'

export type HeadingProps = {
  as?: Element
  color?: Color
  children: ReactNode
}

export default function Heading({
  as = 'h2',
  color = 'dark',
  children,
  ...rest
}: HeadingProps) {
  return (
    <Wrapper {...rest} as={as} color={color}>
      {children}
    </Wrapper>
  )
}

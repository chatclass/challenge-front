import React, { ReactNode } from 'react'
import * as S from './styles'

type ContainerProps = {
  children: ReactNode | ReactNode[]
}
export default function Container({ children }: ContainerProps) {
  return <S.Wrapper>{children}</S.Wrapper>
}

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.breakpoints.sm};
    margin: 0 auto;
  `}
`

export const Container = styled.div`
  padding: 0 1.5rem;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-items: space-between;

  & > h1 {
    font-size: 2.5rem;
    margin: 1.5rem 0;
  }

  & > h3 {
    font-size: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding: 0;

    & > h1 {
      font-size: 4.5rem;
      margin: 3rem 0;
    }

    & > h3 {
      font-size: 2.5rem;
    }
  }
`

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  border-top: 0;
  border-bottom: 1px solid white;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 2rem 0;
  }
`

export const Dl = styled.dl`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: large;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: 5rem;
  }
`

export const Dt = styled.dt`
  display: flex;
  gap: 2rem;
  font-weight: 300;
`

export const Dd = styled.dd`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  font-weight: 700;
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => `${theme.colors.neutrals.white[400]}E6`};
  margin-bottom: 2rem;
  box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.25);

  & > h2 {
    font-size: 2.5rem;
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.colors.neutrals.gray[600]};
  }

  & * svg {
    color: ${({ theme }) => theme.colors.primary.orange};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 4rem;

    & > h2 {
      font-size: 3.5rem;
    }
  }
`

export const Close = styled.button`
  border: 0;
  background: transparent;
  position: absolute;
  padding: 0.25rem;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  border: 2px transparent;

  &:focus-visible {
    outline-color: ${({ theme }) => theme.colors.primary.orange};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 1rem;
    right: 1rem;
  }
`

export const Item = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  & > span {
    color: ${({ theme }) => theme.colors.neutrals.gray[500]};
    font-size: 1rem;

    & > b {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.neutrals.black[500]};
    }
  }
`

export const Items = styled.div`
  max-width: 16.25rem;
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
`

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  border-top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.orange};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 2rem 0;
  }
`

export const Forecast = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Day = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: column;

  & > span {
    color: ${({ theme }) => theme.colors.primary.orange};
    font-size: 1rem;
  }

  & > b {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutrals.black[500]};
  }
`

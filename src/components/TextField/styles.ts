import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    padding: 0 1rem;
    border: 0.01rem solid;
    border-color: ${theme.colors.neutrals.gray[500]};
    background-color: white;
    &:focus-within {
      box-shadow: 0 0 0.2rem ${theme.colors.neutrals.black[400]};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    font-size: 1rem;
    color: ${theme.colors.neutrals.black[500]};
    padding: .75rem 0;
    padding-${iconPosition}: 1rem;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.5rem;
      padding: 1.5rem 0;
    }
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.primary.orange};
    order: ${iconPosition === 'right' ? 1 : 0};
    & > svg {
      width: 2.2rem;
      height: 100%;
      color: ${theme.colors.neutrals.gray[600]};
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    margin: 1rem;
    color: ${theme.colors.neutrals.white[400]};
    font-size: 1rem;
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.primary.orange};
    }
    ${Icon} {
      color: ${theme.colors.primary.orange};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.primary.orange};
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

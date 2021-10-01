import styled from 'styled-components';

const HeaderStyles = styled.header`
  min-height: 18rem;

  margin: 0 auto;

  border-bottom: 2px solid ${(props) => props.theme.colorWhite};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 900px) {
    max-width: 35rem;
    min-height: 15rem;
  }

  & .header {
    &__title {
      color: ${(props) => props.theme.colorWhite};
      font-family: ${(props) => props.theme.primaryfontFamily};
      font-size: ${(props) => props.theme.primaryTitleSize};

      padding: 2.5rem 2rem;
      align-self: flex-start;
      transition: all 0.3s;

      &.opened-details {
        padding: 1rem 2rem;
        font-size: 1.5rem;
      }
    }

    &__error-message {
      color: ${(props) => props.theme.colorWhite};
      font-family: ${(props) => props.theme.primaryfontFamily};
      font-size: 1rem;

      text-align: center;
      padding-bottom: 1rem;
    }

    &__form {
      width: 100%;
      padding: 0 1.5rem;

      @media screen and (min-width: 900px) {
        padding-top: 1rem;
      }
    }
  }

  & .form {
    &__label {
      width: 100%;
      max-width: 25rem;

      margin: 0 auto;

      display: flex;
      align-items: center;

      &.opened-details {
        padding-top: 1rem;
        padding-bottom: 1.5rem;
      }
    }

    &__input {
      width: 100%;

      font-family: ${(props) => props.theme.primaryfontFamily};

      padding: 0.5rem 1rem;
    }

    &__btn {
      border: none;
      background: none;
    }

    &__img {
      margin-left: -2.5rem;
    }
  }
`;

export default HeaderStyles;

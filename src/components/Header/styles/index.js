import styled from 'styled-components';

const HeaderStyles = styled.header`
  min-height: 18rem;

  border-bottom: 2px solid ${(props) => props.theme.colorWhite};

  display: flex;
  flex-direction: column;
  align-items: center;

  & .header {
    &__title {
      color: ${(props) => props.theme.colorWhite};
      font-family: ${(props) => props.theme.primaryfontFamily};
      font-size: ${(props) => props.theme.primaryTitleSize};

      padding: 2.5rem;
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
    }
  }

  & .form {
    &__label {
      width: 100%;

      display: flex;
      align-items: center;
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

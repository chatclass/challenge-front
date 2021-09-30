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

    &__label-search {
      width: 100%;

      padding: 0 1.5rem;

      display: flex;
      align-items: center;
    }

    &__input-search {
      width: 100%;

      font-family: ${(props) => props.theme.primaryfontFamily};

      padding: 0.5rem 1rem;
    }

    &__img-search {
      margin-left: -2.5rem;
    }
  }
`;

export default HeaderStyles;

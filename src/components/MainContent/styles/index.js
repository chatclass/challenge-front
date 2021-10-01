import styled from 'styled-components';

const MainStyled = styled.main`
  @media screen and (min-width: 900px) {
    max-width: 35rem;

    margin: 0 auto;
  }

  & .main {
    &__section {
      padding: 0 1.5rem;

      @media screen and (min-width: 900px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    &__title {
      color: ${(props) => props.theme.colorWhite};
      font-family: ${(props) => props.theme.primaryfontFamily};
      font-size: ${(props) => props.theme.secondTitleSize};

      padding: 1rem 1.5rem;
    }
  }

  & .table {
    font-family: ${(props) => props.theme.primaryfontFamily};
    font-size: ${(props) => props.theme.textSize};

    &__head {
      text-transform: capitalize;
      font-size: 0.85rem;
    }

    &__head-title {
      text-align: left;
      font-weight: 100;
      padding-bottom: 0.75rem;
    }

    &__row .table__cell {
      &:first-child {
        padding-right: 0.5rem;
      }

      &:last-child {
        padding-left: 1rem;
      }
    }

    &__cell {
      padding-bottom: 1rem;
      font-weight: 600;
    }
  }
`;

export default MainStyled;

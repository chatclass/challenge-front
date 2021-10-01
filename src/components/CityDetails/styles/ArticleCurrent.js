import styled from 'styled-components';

const ArticleCurrent = styled.article`
  width: 100%;

  padding: 1rem;
  padding-left: 2rem;
  border-bottom: 2px solid #ff7f00;

  display: grid;
  grid-template-columns: repeat(3, auto);

  & .article {
    &__btn {
      width: 25px;
      height: 25px;

      background: none;
      border: none;
      cursor: pointer;

      grid-column: 3/4;
      grid-row: 1/2;
    }

    &__temp-info {
      width: 100%;
      font-size: 1rem;
      padding-top: 1rem;

      display: flex;

      grid-column: 1/-1;
      grid-row: 3/4;
    }

    &__temp-info2 {
      display: flex;

      padding-top: 1rem;

      grid-column: 1/-1;
      grid-row: 4/5;
    }
  }

  & .header {
    &__location {
      font-size: 1rem;

      grid-column: 1/3;
      grid-row: 1/2;
    }

    &__temp-current {
      grid-column: 1/-1;
      grid-row: 2/3;

      padding-top: 1rem;

      font-size: 2rem;
    }
  }

  & .temp-current {
    &__min {
      padding-right: 0.5rem;
      font-weight: 900;
    }
    &__max {
      padding-right: 1.25rem;
      font-weight: 900;
    }
    &__feel {
      text-transform: capitalize;
      padding-left: 2.25rem;

      & span {
        font-weight: 900;
      }
    }
  }

  & .temp-info2 {
    &__wind {
      padding-right: 1rem;
      text-transform: capitalize;

      & span {
        font-weight: 900;
      }
    }

    &__humidity {
      text-transform: capitalize;

      & span {
        font-weight: 900;
      }
    }
  }
`;

export default ArticleCurrent;

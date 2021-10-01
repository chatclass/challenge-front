import styled from 'styled-components';

const SectionFuture = styled.section`
  width: 100%;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & .section {
    &__day-week {
      display: flex;
      flex-direction: column;
      align-items: center;

      font-size: 0.85rem;
      font-weight: 900;

      text-transform: capitalize;

      & span {
        padding-top: 0.5rem;
        color: #ff7f00;
        font-size: 0.7rem;
      }
    }
  }
`;

export default SectionFuture;

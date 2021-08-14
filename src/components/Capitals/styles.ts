import styled from 'styled-components';
import { breakpoint, colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${colors.black};
  margin-left: 30px;
  margin-right: 30px;
  div:nth-child(1) {
    margin-top: 0px;
  }
  .city {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  @media (max-width: ${breakpoint.sm}px) {
    flex-direction: column;
  }
`;

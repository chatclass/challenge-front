import styled from 'styled-components';
import { breakpoint, colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 5px;
  }
  span {
    color: ${colors.darkOrange};
  }
  @media (max-width: ${breakpoint.sm}) {
  }
  @media (max-width: ${breakpoint.md}) {
  }
  @media (max-width: ${breakpoint.xxl}) {
  }
`;

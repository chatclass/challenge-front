import styled from 'styled-components';
import { breakpoint } from '../../theme';

export const Container = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 15px;
  margin-bottom: 15px;
  @media (max-width: ${breakpoint.sm}) {
  }
  @media (max-width: ${breakpoint.md}) {
  }
  @media (max-width: ${breakpoint.xxl}) {
  }
`;

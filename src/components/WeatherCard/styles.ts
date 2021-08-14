import styled from 'styled-components';
import { breakpoint, colors } from '../../theme';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  background-color: ${colors.white};
  opacity: 0.9;

  h3 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .inline {
    display: flex;
    align-items: center;
  }
  .justify-sb {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ml {
    margin-left: 15px;
  }
  .mr {
    margin-right: 15px;
  }
  .mb {
    margin-bottom: 15px;
  }
  .thin {
    font-weight: 300;
  }
  .capitalize {
    text-transform: capitalize;
  }
  @media (max-width: ${breakpoint.sm}) {
  }
  @media (max-width: ${breakpoint.md}) {
  }
  @media (max-width: ${breakpoint.xxl}) {
  }
`;

export const IconButton = styled.div`
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

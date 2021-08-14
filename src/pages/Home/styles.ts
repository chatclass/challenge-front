import styled from 'styled-components';
import { breakpoint, colors } from '../../theme';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100%;
  background: linear-gradient(
    180deg,
    ${colors.darkOrange} 0%,
    ${colors.lightOrange} 100%
  );

  .mg-horizontal {
    margin-left: 30px;
    margin-right: 30px;
  }

  h1,
  h2 {
    color: ${colors.white};
    margin-left: 30px;
    margin-right: 30px;
  }
  h2 {
    margin-bottom: 20px;
  }

  .header {
    padding: 50px;
    .h1 {
      font-size: 52px;
    }
  }

  .headerCompress {
    padding: 0 0 20px 0;
    margin: 0;
  }

  @media (max-width: ${breakpoint.sm}px) {
    padding: 0px;
    .mg-horizontal {
      margin-left: 0px;
      margin-right: 0px;
    }
    .header {
      padding: 40px 20px;
    }
    .headerCompress {
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 1);
      padding: 20px 0px;
      .h1 {
        font-size: 28px;
      }
    }
  }
`;

export const CustomInput = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0.75em;
  margin: 15px;
  background-color: #fff;
  input {
    border: 2px solid var(--input-border);
    flex: 1;
  }
  @media (max-width: ${breakpoint.sm}px) {
  }
`;

export const IconButton = styled.div`
  cursor: pointer;
  padding: 0 10px;
  :hover {
    opacity: 0.6;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  background: linear-gradient(#ff7f00, #ffb900);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: auto;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    margin-left: 40px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #fff;
  margin: 20px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 50px;
  margin: 40px 0;
  padding: 0 20px;
  background: #fff;
  outline: none;
  border: 1px solid #dc7000;
`;

export const Input = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  margin-right: 8px;
  font-size: 1.2rem;
  color: #888;
  background: transparent;
  outline: none;
  border: none;
`;

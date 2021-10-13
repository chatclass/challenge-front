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
  margin: 24px 0;
  width: auto;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 500px) {
    margin-left: 40px;
    align-self: start;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 50px;
  margin: 20px 0;
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

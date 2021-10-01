import styled from 'styled-components';

const SectionStyled = styled.section`
  width: 100%;

  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorBlack};
  font-family: ${(props) => props.theme.primaryfontFamily};
`;

export default SectionStyled;

import styled from 'styled-components';

interface TextProps {
  weight?: string;
  size?: string;
  color?: string;
  reduced?: boolean;
}

export const NormalText = styled.p<TextProps>`
  color: ${props => props.color || '#fff'};
  font-weight: ${props => (props.weight ? props.weight : '400')};
  font-size: ${props => (props.size ? props.size : '1rem')};
`;

export const MainText = styled.h1<TextProps>`
  color: ${props => props.color || '#fff'};
  font-size: ${props => (props.reduced ? '3rem' : '3.2rem')};
  font-weight: 800;

  @media screen and (max-width: 500px) {
    font-size: ${props => (props.reduced ? '2rem' : '3rem')};
  }
`;

export const SubText = styled.h2<TextProps>`
  color: ${props => props.color || '#fff'};
  font-size: 2rem;
  font-weight: 700;
`;

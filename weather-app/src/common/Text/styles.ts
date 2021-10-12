import styled from 'styled-components';

interface TextProps {
  weight?: string;
  size?: string;
  color?: string;
}

export const NormalText = styled.p<TextProps>`
  color: ${props => props.color || '#fff'};
  font-weight: ${props => (props.weight ? props.weight : '400')};
  font-size: ${props => (props.size ? props.size : '1rem')};
`;

export const MainText = styled.h1<TextProps>`
  color: ${props => props.color || '#fff'};
  font-size: 3.5rem;
  font-weight: 900;
`;

export const SubText = styled.h2<TextProps>`
  color: ${props => props.color || '#fff'};
  font-size: 2rem;
  font-weight: 700;
`;

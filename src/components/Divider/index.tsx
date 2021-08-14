import React from 'react';

import { Container } from './styles';

interface Props {
  color: string;
}

const Divider: React.FC<Props> = ({ color }: Props) => {
  return <Container style={{ backgroundColor: color }} />;
};

export default Divider;

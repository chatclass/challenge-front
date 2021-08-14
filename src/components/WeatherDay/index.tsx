import React from 'react';
import { forecastDay } from '../../store/ducks/weather/types';
import { capitalize } from '../../utils/functions';

import { Container } from './styles';

interface Props {
  data: forecastDay;
}

const WeatherDay: React.FC<Props> = ({ data }: Props) => {
  return (
    <Container>
      <p className="body">
        {capitalize(
          new Date(data.dt_txt)
            .toLocaleDateString('pt-BR', {
              weekday: 'short',
            })
            .split('-')[0],
        )}
      </p>
      <span className="subtitle">
        {Math.round(data.main.temp_min)}º {Math.round(data.main.temp_max)}º
      </span>
    </Container>
  );
};

export default WeatherDay;

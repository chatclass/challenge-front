import React from 'react';
import { FaTimes, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { forecast } from '../../store/ducks/weather/types';
import { colors } from '../../theme';
import { capitalize, unique } from '../../utils/functions';
import Divider from '../Divider';
import WeatherDay from '../WeatherDay';

import { Container, IconButton } from './styles';

interface Props {
  data: forecast;
  onClose: any;
}

const WeatherCard: React.FC<Props> = ({ data, onClose }: Props) => {
  return (
    <Container className="mg-horizontal">
      <div className="justify-sb mg-horizontal">
        <p className="body">
          {data?.city.name} - {data?.city.country}
        </p>
        <IconContext.Provider value={{ color: colors.darkOrange, size: '20' }}>
          <IconButton onClick={onClose}>
            <FaTimes />
          </IconButton>
        </IconContext.Provider>
      </div>
      <h3 className="mg-horizontal capitalize h3">
        {Math.round(data?.list[0].main.temp)}ºC{' '}
        {capitalize(data?.list[0].weather[0].description)}
      </h3>
      <div className="inline mg-horizontal">
        <div className="mr">
          <div className="inline mb">
            <div className="inline mr">
              <IconContext.Provider
                value={{ color: colors.darkOrange, size: '16' }}
              >
                <FaArrowDown />
              </IconContext.Provider>
              <span className="body">
                {Math.round(data?.list[0].main.temp_min)}º
              </span>
            </div>
            <div className="inline">
              <IconContext.Provider
                value={{ color: colors.darkOrange, size: '16' }}
              >
                <FaArrowUp />
              </IconContext.Provider>
              <span className="body">
                {Math.round(data?.list[0].main.temp_max)}º
              </span>
            </div>
          </div>
          <div className="inline">
            <span className="body">
              <span className="thin body">Vento </span>
              {(data?.list[0].wind.speed).toFixed(1)}km/h
            </span>
          </div>
        </div>
        <div className="ml">
          <div className="inline mb">
            <span className="body">
              <span className="thin body">Sensação </span>
              {Math.round(data?.list[0].main.feels_like)}ºC
            </span>
          </div>
          <div className="inline">
            <span className="body">
              <span className="thin body">Humidade </span>
              {data?.list[0].main.humidity}%
            </span>
          </div>
        </div>
      </div>
      <Divider color={colors.darkOrange} />
      <div className="justify-sb mg-horizontal">
        {data?.list
          .filter(unique)
          .filter(e => new Date(e.dt_txt).getDay() !== new Date().getDay())
          .map(day => (
            <WeatherDay data={day} />
          ))}
      </div>
    </Container>
  );
};

export default WeatherCard;

import { Line } from '@/styles/global';
import {
  ForecastHeader,
  ForecastWrapper,
  Close,
  ForecastCity,
  ActualWeather,
  ForecastWeatherWrapper,
  ForecastWeatherValue,
  ForecastWeatherInfo,
  ForecastWeatherLabel,
  ForecastWeatherInfos,
  ForecastWeatherMinMaxWrapper,
  ForecastDays,
  ForecastDaysHeader,
  ForecastDayWrapper,
  ForecastDayWeather,
  ForecastDayWeatherWrapper,
  ForecastFade,
} from './styles';
import Image from 'next/image';
import { useWeather } from '@/helpers/useWeather';
import { Loading } from '../Loading';
import { Text } from '..';

type ForecastProps = {
  city: string;
  onClose: () => void;
};

export const Forecast = ({ city, onClose }: ForecastProps) => {
  const { weather, loading, error } = useWeather(city);

  return loading ? (
    <Loading />
  ) : !weather || error ? (
    <Text text="Algo de inesperado aconteceu, por favor, tente novamente!" />
  ) : (
    <ForecastFade direction="down">
      <ForecastWrapper>
        <ForecastHeader>
          <ForecastCity>{weather.name}</ForecastCity>
          <Close
            src="/close.svg"
            alt="close x icon"
            height={24}
            width={24}
            onClick={onClose}
          />
        </ForecastHeader>
        <ActualWeather>
          {`${weather.actual}°C ${weather.weather_description}`}
        </ActualWeather>
        <ForecastWeatherInfos>
          <ForecastWeatherWrapper>
            <ForecastWeatherMinMaxWrapper>
              <ForecastWeatherInfo>
                <Image
                  src="/down.svg"
                  alt="arrow up icon"
                  height={24}
                  width={24}
                />
                <ForecastWeatherValue
                  weight={'700'}
                >{`${weather.min}°`}</ForecastWeatherValue>
              </ForecastWeatherInfo>
              <ForecastWeatherInfo>
                <Image
                  src="/up.svg"
                  alt="arrow down icon"
                  height={24}
                  width={24}
                />
                <ForecastWeatherValue
                  weight={'700'}
                >{`${weather.max}°`}</ForecastWeatherValue>
              </ForecastWeatherInfo>
            </ForecastWeatherMinMaxWrapper>
            <ForecastWeatherInfo>
              <ForecastWeatherLabel>Vento</ForecastWeatherLabel>
              <ForecastWeatherValue>{`${weather.wind_speed}km/h`}</ForecastWeatherValue>
            </ForecastWeatherInfo>
          </ForecastWeatherWrapper>
          <ForecastWeatherWrapper>
            <ForecastWeatherInfo>
              <ForecastWeatherLabel>Sensação</ForecastWeatherLabel>
              <ForecastWeatherValue>{`${weather.feels_like}°C`}</ForecastWeatherValue>
            </ForecastWeatherInfo>
            <ForecastWeatherInfo>
              <ForecastWeatherLabel>Humidade</ForecastWeatherLabel>
              <ForecastWeatherValue>{`${weather.humidity}%`}</ForecastWeatherValue>
            </ForecastWeatherInfo>
          </ForecastWeatherWrapper>
        </ForecastWeatherInfos>
        <Line color={'#ff7f00'} margin={'16px 0'} />
        <ForecastDays>
          {weather.forecast.map((day, i) => (
            <ForecastDayWrapper key={i}>
              <ForecastDaysHeader>{day.day}</ForecastDaysHeader>
              <ForecastDayWeatherWrapper>
                <ForecastDayWeather>{`${day.min}°`}</ForecastDayWeather>
                <ForecastDayWeather>{`${day.max}°`}</ForecastDayWeather>
              </ForecastDayWeatherWrapper>
            </ForecastDayWrapper>
          ))}
        </ForecastDays>
      </ForecastWrapper>
    </ForecastFade>
  );
};

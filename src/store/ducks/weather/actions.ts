import { action } from 'typesafe-actions';
import { weatherTypes, cityWeather, forecast } from './types';

export const fetchWeatherRequest = (city: string) =>
  action(weatherTypes.FETCH_WEATHER_REQUEST, { city });

export const fetchWeatherSuccess = (data: cityWeather | forecast) =>
  action(weatherTypes.FETCH_WEATHER_SUCCCES, { data });

export const fetchWeatherFailure = () =>
  action(weatherTypes.FETCH_WEATHER_FAILURE);

import { action } from 'typesafe-actions';
import { weatherTypes, cityWeather, forecast } from './types';

export const fetchWeatherRequest = (city: string) =>
  action(weatherTypes.FETCH_WEATHER_REQUEST, { city });

export const fetchWeatherCapitalsRequest = (cities: string[]) =>
  action(weatherTypes.FETCH_WEATHER_CAPITALS_REQUEST, { cities });

export const fetchWeatherSuccess = (data: forecast) =>
  action(weatherTypes.FETCH_WEATHER_SUCCCES, { data });

export const fetchWeatherCapitalsSuccess = (dataCapitals: cityWeather[]) =>
  action(weatherTypes.FETCH_WEATHER_CAPITALS_SUCCCES, { dataCapitals });

export const fetchWeatherFailure = () =>
  action(weatherTypes.FETCH_WEATHER_FAILURE);


import { action } from 'typesafe-actions';
import { WeatherTypes, CityWeather } from './types';

export const loadRequest = () => action(WeatherTypes.LOAD_REQUEST);

export const loadSuccess = (data: CityWeather) => action(WeatherTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(WeatherTypes.LOAD_FAILURE);

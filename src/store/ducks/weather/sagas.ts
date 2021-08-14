/* eslint-disable no-plusplus */
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import {
  fetchWeatherSuccess,
  fetchWeatherFailure,
  fetchWeatherCapitalsSuccess,
} from './actions';
import { cityWeather, forecast, weatherTypes } from './types';

const apiKey = '1b7ef83880806bcc2d5a4cb079b3c083';
const units = 'metric';
const lang = 'pt_br';

const getWeather = (city: string) =>
  api.get<forecast>(
    `/forecast?appid=${apiKey}&units=${units}&lang=${lang}&q=${city}`,
  );

const getWeatherCapitals = (city: string) =>
  api.get<cityWeather>(
    `/weather?appid=1b7ef83880806bcc2d5a4cb079b3c083&units=metric&lang=pt_br&q=${city}`,
  );

export function* fetchWeather({ payload: { city } }: any) {
  try {
    const response: AxiosResponse<forecast> = yield call(getWeather, city);

    yield put(fetchWeatherSuccess(response.data));
  } catch (err) {
    yield put(fetchWeatherFailure());
  }
}

export function* fetchWeatherCapitals({ payload: { cities } }: any) {
  try {
    const response: cityWeather[] = [];
    for (let i = 0; i < cities.length; i++) {
      const { data }: AxiosResponse<cityWeather> = yield call(
        getWeatherCapitals,
        cities[i],
      );
      response.push(data);
    }

    yield put(fetchWeatherCapitalsSuccess(response));
  } catch (err) {
    yield put(fetchWeatherFailure());
  }
}

function* weatherSaga() {
  yield all([
    takeLatest(weatherTypes.FETCH_WEATHER_REQUEST, fetchWeather),
    takeLatest(
      weatherTypes.FETCH_WEATHER_CAPITALS_REQUEST,
      fetchWeatherCapitals,
    ),
  ]);
}

export default weatherSaga;

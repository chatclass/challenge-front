import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { fetchWeatherSuccess, fetchWeatherFailure } from './actions';
import { forecast, weatherTypes } from './types';

const getWeather = (city: string) =>
  api.get<forecast>(
    `/forecast?appid=1b7ef83880806bcc2d5a4cb079b3c083&units=metric&lang=pt_br&q=${city}`,
  );

export function* fetchWeather({ payload: { city } }: any) {
  try {
    const response: AxiosResponse<forecast> = yield call(getWeather, city);

    yield put(fetchWeatherSuccess(response.data));
  } catch (err) {
    yield put(fetchWeatherFailure());
  }
}

function* weatherSaga() {
  yield all([takeLatest(weatherTypes.FETCH_WEATHER_REQUEST, fetchWeather)]);
}

export default weatherSaga;

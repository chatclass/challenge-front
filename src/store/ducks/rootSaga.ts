import { all, takeLatest } from 'redux-saga/effects';

import { WeatherTypes } from './weather/types';
import { load } from './weather/sagas';

export default function* rootSaga() {
  yield all([
    takeLatest(WeatherTypes.LOAD_REQUEST, load),
  ]);
}

import { Reducer } from 'redux';
import { weatherState, weatherTypes } from './types';

const INITIAL_STATE: weatherState = {
  dataCapitals: undefined,
  data: undefined,
  error: false,
  loading: false,
};

const reducer: Reducer<weatherState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherTypes.FETCH_WEATHER_REQUEST:
      return { ...state, loading: true };
    case weatherTypes.FETCH_WEATHER_CAPITALS_REQUEST:
      return { ...state, loading: true };
    case weatherTypes.FETCH_WEATHER_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case weatherTypes.FETCH_WEATHER_CAPITALS_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        dataCapitals: action.payload.dataCapitals,
      };
    case weatherTypes.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: undefined,
      };
    default:
      return state;
  }
};

export default reducer;

import { Reducer } from 'redux';
import { WeatherState, WeatherTypes } from './types';

const INITIAL_STATE: WeatherState = {
  data: undefined,
  error: false,
  loading: false,
};

const reducer: Reducer<WeatherState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case WeatherTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case WeatherTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: undefined,
      };
    default:
      return state;
  }
};

export default reducer;

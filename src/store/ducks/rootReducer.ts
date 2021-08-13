import { combineReducers } from 'redux';

import weather from './weather';

const rootReducer = combineReducers({
  weather,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

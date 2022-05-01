import { combineReducers } from 'redux';
import weatherData from './weatherReducer';

export const rootReducer = combineReducers({
	weatherData: weatherData
});

export type RootState = ReturnType<typeof rootReducer>;

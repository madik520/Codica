import {
	START_FETCHING,
	GET_CITY,
	ERROR_FETCHING,
	DELETE_CARD,
	UPDATE_CARD,
	IS_UPDATING,
	CARD_DETAILS
} from '../constants/constants';

import { Dispatch } from 'redux';

import { getWeatherInCity } from '../utils/api';

export const getWeather = (city: string) => async (dispatch: Dispatch) => {
	dispatch({ type: START_FETCHING, payload: true });
	try {
		const data = await getWeatherInCity(city, false);
		return dispatch({ type: GET_CITY, payload: data });
	} catch (err) {
		return dispatch({ type: ERROR_FETCHING, payload: err });
	}
};

export const deleteCard = (id: number) => (dispatch: Dispatch) => {
	return dispatch({ type: DELETE_CARD, payload: id });
};

export const updateQuery = (city: string, id: number) => async (dispatch: Dispatch) => {
	dispatch({ type: IS_UPDATING, payload: { id: id, isUpdate: true } });
	try {
		const data = await getWeatherInCity(city, true);
		return dispatch({ type: UPDATE_CARD, payload: data });
	} catch (err) {
		return dispatch({ type: ERROR_FETCHING, payload: err });
	}
};

export const detailsWeather = (id: number) => (dispatch: Dispatch) => {
	return dispatch({ type: CARD_DETAILS, payload: id });
};

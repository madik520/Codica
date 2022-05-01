import {
	START_FETCHING,
	GET_CITY,
	ERROR_FETCHING,
	DELETE_CARD,
	UPDATE_CARD,
	IS_UPDATING,
	CARD_DETAILS
} from '../constants/constants';
import { StateTypes, ActionTypes, ApiTypes, ErrorTypes } from '../types/types';

const initialState: StateTypes = {
	isFetching: false,
	cityData: [] as ApiTypes[],
	error: {} as ErrorTypes,
	cardDetails: {} as ApiTypes
};

const weatherData = (state = initialState, action: ActionTypes): StateTypes => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isFetching: action.payload
			};
		case GET_CITY:
			// eslint-disable-next-line no-case-declarations
			const newData = [...state.cityData, action.payload];
			return {
				...state,
				isFetching: false,
				cityData: [...new Map(newData.map((item) => [item.name, item])).values()]
			};
		case ERROR_FETCHING:
			return {
				...state,
				isFetching: false,
				error: {
					cod: action.payload.cod,
					message: action.payload.message
				}
			};
		case DELETE_CARD:
			return {
				...state,
				cityData: state.cityData.filter((item: ApiTypes) => item.id !== action.payload)
			};
		case IS_UPDATING: {
			const updateData = state.cityData.map((i: ApiTypes) => {
				if (i.id === action.payload.id) {
					i.isUpdate = action.payload.isUpdate;
				}
				return i;
			});
			return {
				...state,
				cityData: updateData
			};
		}
		case UPDATE_CARD: {
			const newData = state.cityData.map((item: ApiTypes) =>
				item.name === action.payload.name ? action.payload : item
			);
			return {
				...state,
				cityData: newData
			};
		}
		case CARD_DETAILS: {
			const currentData = state.cityData.find((i: ApiTypes) => i.id === action.payload);
			const newData = currentData || ({} as ApiTypes);
			return {
				...state,
				cardDetails: newData
			};
		}
		default:
			return state;
	}
};

export default weatherData;

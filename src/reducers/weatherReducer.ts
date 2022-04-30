import { START_FETCHING, GET_CITY, ERROR_FETCHING, DELETE_CARD, UPDATE_CARD, IS_UPDATING } from '../constants/constants';
import { StateTypes, ActionTypes } from '../types/types';
import { ApiTypes } from '../types/types';

const initialState: StateTypes = {
	isFetching: false,
	cityData: [],
	error: null,
};

const weatherData = (state = initialState, action: ActionTypes):StateTypes => {
	switch(action.type){
		case START_FETCHING:
			return {
				...state,
				isFetching: action.payload
			}
		case GET_CITY:
			// eslint-disable-next-line no-case-declarations
			const newData = [...state.cityData, action.payload];
			return {
				...state,
				isFetching: false,
				cityData: [...new Map(newData.map((item) => [item.name, item])).values()]
			}
		case ERROR_FETCHING: 
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		case DELETE_CARD:
			return {
				...state,
				cityData: state.cityData.filter((item: ApiTypes) => item.id !== action.payload)
			}
		case IS_UPDATING:{
			const updateData = state.cityData.map((i:ApiTypes) => {
				if(i.id === action.payload.id) {
					i.isUpdate = action.payload.isUpdate
				}
				return i
			})
			return {
				...state,
				cityData: updateData
			}
		}
		case UPDATE_CARD: {
			const newData = state.cityData.map((item: ApiTypes) => item.name === action.payload.name ? action.payload : item)
			return {
				...state,
				cityData: newData
			}
		}
		default:
			return state;
	};
};

export default weatherData;
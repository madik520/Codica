import {
	START_FETCHING,
	GET_CITY,
	ERROR_FETCHING,
	DELETE_CARD,
	UPDATE_CARD,
	IS_UPDATING,
	CARD_DETAILS
} from '../constants/constants';

// State types

export type ApiTypes = {
	id: number;
	name: string;
	main: {
		temp_min: number;
		temp_max: number;
		humidity: number;
		feels_like: number;
	};
	wind: {
		speed: number;
	};
	weather: {
		icon: string;
		description: string;
	};
	isUpdate: boolean;
	update: boolean;
};

export type StateTypes = {
	isFetching: boolean;
	cityData: ApiTypes[];
	error: ErrorTypes;
	cardDetails: ApiTypes;
};

export type ErrorTypes = {
	cod: string,
	message: string
}

// Action Types

interface ActionStartFetching {
	type: typeof START_FETCHING;
	payload: boolean;
}

interface ActionGetCity {
	type: typeof GET_CITY;
	payload: ApiTypes;
}

interface ActionErrorFetch {
	type: typeof ERROR_FETCHING;
	payload: ErrorTypes;
}

interface ActionDeleteCard {
	type: typeof DELETE_CARD;
	payload: number;
}

interface ActionUpdateCard {
	type: typeof UPDATE_CARD;
	payload: ApiTypes;
}

interface ActionIsUpdating {
	type: typeof IS_UPDATING;
	payload: {
		id: number;
		isUpdate: boolean;
	};
}

interface ActionCardDetails {
	type: typeof CARD_DETAILS;
	payload: number;
}

export type ActionTypes =
	| ActionStartFetching
	| ActionGetCity
	| ActionErrorFetch
	| ActionDeleteCard
	| ActionUpdateCard
	| ActionIsUpdating
	| ActionCardDetails;

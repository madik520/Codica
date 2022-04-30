const BASE_PATH = "https://";
const API_VERSION = "/data/2.5/weather";
const QUERY = "?q=";
const KEY = "&appid=";
const metrics = "&units=metric";

export const getWeatherInCity = async (city: string, update: boolean) => {
	const responce = await fetch(`${BASE_PATH}${process.env.API_ENDPOINT}${API_VERSION}${QUERY}${city}${KEY}${process.env.API_KEY}${metrics}`);
	const data = await responce.json();
	const newData = {
		id: data.id,
		name: data.name,
		main: {
			temp_min: data.main.temp_min,
			temp_max: data.main.temp_max,
			humidity: data.main.humidity,
			feels_like: data.main.feels_like
		},
		wind: {
			speed: data.wind.speed
		},
		weather: {
			icon: data.weather[0].icon,
			description: data.weather[0].description
		},
		update: update,
		isUpdate: false
	}

	return newData;
}
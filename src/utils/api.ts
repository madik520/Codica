const BASE_PATH = "https://";
const API_VERSION = "/data/2.5/weather";
const QUERY = "?q=";
const KEY = "&appid=";
const metrics = "&units=metric";

export const getWeatherInCity = async (city: string) => {
	const responce = await fetch(`${BASE_PATH}${process.env.API_ENDPOINT}${API_VERSION}${QUERY}${city}${KEY}${process.env.API_KEY}${metrics}`);
	const data = await responce.json();

	return data;
}
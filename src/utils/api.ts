const basePath = 'https://api.openweathermap.org/data/2.5';
const WEATHER = '/weather';
const QUERY = '?q=';
const KEY = '&appid=';
const metrics = '&units=metric';

export const getWeatherInCity = async (city: string, update: boolean) => {
	/* I use .env files, but i dont now how use it with github pages, and i use my api key public */
	const responce = await fetch(`${basePath}${WEATHER}${QUERY}${city}${KEY}3baaceb5b5231055a73fe76199a98533${metrics}`);
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
	};

	return newData;
};

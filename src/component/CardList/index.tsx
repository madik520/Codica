import CardItem from '../CardItem';

import { useState, useEffect } from 'react';
import { getWeatherInCity } from '../../utils/api';

import './CardList.scss';

const CardList = () => {
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		const getData = async () => setData(await getWeatherInCity("Kiev"));
		getData();
	}, [setData])
  const newData = {
    id: data?.id || 0,
    minTemp: data?.main?.temp_min || 0,
    maxTemp: data?.main?.temp_max || 0,
    img: data?.weather[0]?.icon || "",
    city: data?.name || ""
  }
 
	return  (
		<div className="card-list-wrapper">
      <CardItem id={newData.id} minTemp={newData.minTemp} maxTemp={newData.maxTemp} img={newData.img} city={newData.city} />
		</div>
	);
};

export default CardList;
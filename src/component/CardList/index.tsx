import CardItem from '../CardItem';

import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/combineReducer';
import { ApiTypes } from '../../types/types';

import './CardList.scss';

const CardList = () => {
	const weatherData = useSelector((state: RootState) => state.weatherData);
	const { cityData } = weatherData
	return  (
		<div className="card-list-wrapper">
			{cityData && cityData.map((item: ApiTypes) => {
				return <CardItem 
					key={item.id} 
					id={item.id} 
					img={item.weather.icon}
					city={item.name}
					maxTemp={item.main.temp_max}
					minTemp={item.main.temp_min}
					humidity={item.main.humidity}
					isUpdating={item.isUpdate}
					isUpdate={item.update}
				/>
			})}
		</div>
	);
};

export default CardList;
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Preloader from '../../component/Preloader';
import NotFound from '../404';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../reducers/combineReducer';
import { updateQuery, detailsWeather } from '../../actions/actionCreator';

import './WeatherInfo.scss';

const WeatherInfo = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const detailsData = useSelector((state: RootState) => state.weatherData.cardDetails);
	const dispatch = useDispatch();
	const params = useParams();
	if (detailsData.name !== params.id) {
		return <NotFound />;
	} else {
		const {
			id,
			name,
			update,
			main: { temp_min, temp_max, humidity, feels_like },
			weather: { icon, description },
			wind: { speed }
		} = detailsData;

		const updateDetailsInfo = () => {
			setIsLoading(true);
			const promise = new Promise((resolve, rejects) => {
				resolve('success');
				rejects('error');
			});
			return promise
				.then(() => dispatch(updateQuery(name, id)))
				.then(() => dispatch(detailsWeather(id)))
				.then(() => setIsLoading(false));
		};

		return (
			<Container sx={{ height: '80vh' }} maxWidth="lg">
				{isLoading ? (
					<Preloader />
				) : (
					<div className="weath-info-wrapper">
						<div className="weath-header-info">
							<div className="info-icon">
								<img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
							</div>
							<Typography variant="h3">{name}</Typography>
						</div>
						<div className="weath-main-info">
							<Typography color={'primary'} className="line-item" variant="h6">
								City: <Typography variant="body1">{name}</Typography>
							</Typography>
							<Typography color={'primary'} className="line-item" variant="h6">
								Min. Temperature: <Typography variant="body1">{Math.round(temp_min)} C&#176;</Typography>
							</Typography>
							<Typography color={'primary'} className="line-item" variant="h6">
								Max. Temperature: <Typography variant="body1">{Math.round(temp_max)} C&#176;</Typography>
							</Typography>
							<Typography color={'primary'} className="line-item" variant="h6">
								Feels like: <Typography variant="body1">{Math.round(feels_like)} C&#176;</Typography>
							</Typography>
							<Typography color={'primary'} className="line-item" variant="h6">
								Humidity: <Typography variant="body1">{Math.round(humidity)}%</Typography>
							</Typography>
							<Typography color={'primary'} className="line-item" variant="h6">
								Weather: <Typography variant="body1">{description}</Typography>
							</Typography>
							<Typography color={'primary'} className="line-item" variant="h6">
								Wind speed: <Typography variant="body1">{speed} m/s</Typography>
							</Typography>
							{update && (
								<Typography color={'secondary'} className="line-item" variant="h6">
									updated
								</Typography>
							)}
							<ButtonGroup
								className="btn-group-info"
								variant="outlined"
								disableElevation
								aria-label="outlined button group"
							>
								<Link to="/">
									<Button color={'success'}>Back to Home</Button>
								</Link>
								<Button onClick={updateDetailsInfo} color={'warning'}>
									Update info
								</Button>
							</ButtonGroup>
						</div>
					</div>
				)}
			</Container>
		);
	}
};

export default WeatherInfo;

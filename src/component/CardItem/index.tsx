import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { ICardItem } from './CardItem';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import './CardItem.scss';

const CardItem = ({ id, img, maxTemp, minTemp, city }:ICardItem) => {
	return(
		<Card sx={{ maxWidth: 345 }}>
			<Link to={`/${id}`}>
				<CardActionArea>
					<div className="card-icon">
						<img src={`http://openweathermap.org/img/wn/${img}.png`} alt={"icon"} />
					</div>
					<CardContent>
						<Typography sx={{ textAlign: 'center' }} variant="h4">{city}</Typography>
						<div className="card-info">
							<Typography variant="body2">Temperature: </Typography>
							<Typography variant="body2"><ArrowDownwardIcon /> {minTemp}</Typography>
						  <Typography variant="body2"><ArrowUpwardIcon /> {maxTemp}</Typography>
						</div>
					</CardContent>
					<CardActions>
						<Button size="small">More details</Button>
					</CardActions>
				</CardActionArea>
			</Link>
		</Card>
	);
};

export default CardItem;
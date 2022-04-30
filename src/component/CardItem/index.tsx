import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Preloader from "../Preloader";
import { ICardItem } from "./CardItem";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../reducers/combineReducer";
import { deleteCard, updateQuery } from "../../actions/actionCreator";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";


import './CardItem.scss';


const CardItem = ({ id, img, maxTemp, minTemp, city, humidity, isUpdating, isUpdate }:ICardItem) => {
	const dispatch = useDispatch();

	const handleDelete = () => dispatch(deleteCard(id));
	const handleUpdate = () => dispatch(updateQuery(city, id));
	return(
		<Card className="card-item" sx={{ maxWidth: 345 }}>
			
			{isUpdating ? <Preloader />
				:
				<Link to={`/${id}`}>
					<CardActionArea>
						<div className="card-icon">
							<img src={`http://openweathermap.org/img/wn/${img}.png`} alt={"icon"} />
						</div>
						<CardContent>
							<Typography sx={{ textAlign: 'center' }} variant="h4">{city}</Typography>
							<div className="card-info">
								<Typography variant="body2">Temperature: </Typography>
								<Typography variant="body2"><ArrowDownwardIcon /> {Math.round(minTemp)}</Typography>
						  <Typography variant="body2"><ArrowUpwardIcon /> {Math.round(maxTemp)}</Typography>
							</div>
							<Typography variant="body2">Humidity: {humidity}%</Typography>
							{isUpdate ? <span className="updated-text">updated</span> : null}
						</CardContent>
					</CardActionArea>
				</Link>
			}
			<CardActions>
				<Button onClick={handleUpdate} size="small">Update data</Button>
				<Button onClick={handleDelete} color={"error"} size="small">Delete city</Button>
			</CardActions>
		</Card>
	);
};

export default CardItem;
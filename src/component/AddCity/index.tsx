import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { getWeather } from '../../actions/actionCreator';

import React, { useState } from 'react';
import './AddCity.scss';

const AddCity = () => {
	const [val, setVal] = useState<string>("");
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value);
	const getCityWeather = () => dispatch(getWeather(val));

	return(
		<div className="city-wrapper">
			<div className="city-input">
				<TextField
					id="outlined"
					label="Enter city"
					value={val}
					onChange={handleChange}
				/>
			</div>
			<Button onClick={getCityWeather} className="city-btn" variant="contained">Add City</Button>
		</div>
	);
};

export default AddCity;
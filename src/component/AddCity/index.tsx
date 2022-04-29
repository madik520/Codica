import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import './AddCity.scss';

const AddCity = () => {

	return(
		<div className="city-wrapper">
			<div className="city-input">
				<TextField
					error={false}
					id="outlined-error"
					label="Enter city"
				/>
			</div>
			<Button className="city-btn" variant="contained">Add City</Button>
		</div>
	);
};

export default AddCity;
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import './Preloader.scss';

const Preloader = () => {
	return (
		<Box className='preloader'>
			<CircularProgress />
		</Box>
	);
};

export default Preloader;
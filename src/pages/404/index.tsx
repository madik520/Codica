import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

import './404.scss';

const NotFound = () => {
	return (
		<div className="notfound-container">
			<Typography variant="h1">Ups error 404, page not found!</Typography>
			<Typography variant="body1">
				Back to
				<Link to="/Codica">
					<ArrowBackIcon /> Home
				</Link>
			</Typography>
		</div>
	);
};

export default NotFound;

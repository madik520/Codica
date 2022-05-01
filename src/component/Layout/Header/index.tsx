import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import { useLocation } from 'react-router-dom';

import './Header.scss';

const Header = () => {
	const location = useLocation();
	return (
		<header>
			<div className="header-wrapper">
				<div className="header-icon">
					<CloudIcon color={'secondary'} />
				</div>
				<div className="header-location">
					<Typography variant="body1">You here: </Typography>
					<Typography color={'primary'} variant="body1">
						{location.pathname === '/' ? 'HOME' : location.pathname.toLocaleUpperCase()}
					</Typography>
				</div>
			</div>
		</header>
	);
};

export default Header;

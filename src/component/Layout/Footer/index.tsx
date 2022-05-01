import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import './Footer.scss';

const Footer = () => {
	return (
		<footer>
			<div className="footer-wrapper">
				<Typography variant="body1">&copy;2022 All rights reserved</Typography>
				<Typography variant="body1">
					With <FavoriteIcon sx={{ color: pink[500] }} /> for Codica
				</Typography>
			</div>
		</footer>
	);
};

export default Footer;

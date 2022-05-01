import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#cc00ff'
		},
		secondary: {
			main: '#01579b'
		},
		error: {
			main: red[500]
		}
	}
});

export default theme;

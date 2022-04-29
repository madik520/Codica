import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import store from './store/store';
import theme from './utils/theme';

import 'reflect-metadata';

import './assets/main.scss';

if (module.hot) {
	module.hot.accept();

	module.hot.addStatusHandler((status) => {
		if (status === 'prepare') {
			console.clear();
		}
	});
}

render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</StrictMode>,

	document.getElementById('root')
);
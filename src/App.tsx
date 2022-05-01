import Layout from './component/Layout';
import Home from './pages/Home';
import WeatherInfo from './pages/WeatherInfo';
import NotFound from './pages/404';
import { Route, Routes } from 'react-router';

const App = () => {
	return (
		<div className="container">
			<Layout>
				<Routes>{/* Change default Home route "/", on "/Codica", for GitHub Pages */}
					<Route path={'/Codica'} element={<Home />} />
					<Route path={'/weather-details/:id'} element={<WeatherInfo />} />
					<Route path={'*'} element={<NotFound />} />
				</Routes>
			</Layout>
		</div>
	);
};

export default App;

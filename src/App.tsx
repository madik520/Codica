import Layout from './component/Layout';
import Home from './pages/Home';

import { Route, Routes  } from 'react-router';

const App = () => {
	return(
		<div className="container">
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Layout>
		</div>
	);
};

export default App;
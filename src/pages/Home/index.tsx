import AddCity from '../../component/AddCity';
import CardList from '../../component/CardList';
import './Home.scss'

const Home = () => {

	return(
		<div className="home-page">
			<AddCity />
			<CardList />
		</div>
	);
};

export default Home;
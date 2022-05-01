import Header from './Header';
import Footer from './Footer';

import { FC } from 'react';

import './Layout.scss';

const Layout: FC = ({ children }) => {
	return (
		<div className="layout">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;

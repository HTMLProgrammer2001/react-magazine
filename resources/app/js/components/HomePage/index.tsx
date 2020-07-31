import * as React from 'react';

import Breadcrumbs from '../Breadcrumbs';
import Goods from './Goods/';


const HomePage: React.FC<{}> = () => {
	React.useEffect(() => {
		document.title = 'Home | Products';
	}, []);

	return (
		<React.Fragment>
			<Breadcrumbs paths={[{name: 'Home', path: '/'}]}/>
			<Goods/>
		</React.Fragment>
	);
};

export default HomePage;

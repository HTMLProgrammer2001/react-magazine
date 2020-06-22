import * as React from 'react';

import Paginate from '../Paginate';
import Goods from './Goods/';


const HomePage: React.FC<{}> = () => {
	React.useEffect(() => {
		document.title = 'Home | Products';
	}, []);

	return (
		<React.Fragment>
			<Paginate paths={[{name: 'Home', path: '/'}]}/>
			<Goods/>
		</React.Fragment>
	);
};

export default HomePage;

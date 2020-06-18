import * as React from 'react';

import Paginate from '../Paginate';


const HomePage: React.FC<{}> = () => {
	React.useEffect(() => {
		document.title = 'Home | Products';
	}, []);

	return (
		<React.Fragment>
			<Paginate paths={[{name: 'Home', path: '/'}]}/>
		</React.Fragment>
	);
};

export default HomePage;

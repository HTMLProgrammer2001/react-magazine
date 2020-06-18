import * as React from 'react';

import Paginate from '../Paginate';
import CategoriesList from './CategoriesList';


const CategoriesPage: React.FC<{}> = () => {
	React.useEffect(() => {
		document.title = 'Categories';
	}, []);

	return (
		<React.Fragment>
			<Paginate paths={[
				{name: 'Home', path: '/'},
				{name: 'Categories', path: '/categories'}
			]}/>

			<CategoriesList/>
		</React.Fragment>
	);
};

export default CategoriesPage;

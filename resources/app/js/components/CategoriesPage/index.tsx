import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import CategoriesList from './CategoriesList';
import {RootState} from '../../redux';
import thunkCategory from '../../redux/category/thunks';
import {selectCategoriesState} from '../../redux/category/selectors';


const mapStateToProps = (state: RootState) => ({
	categoriesState: selectCategoriesState(state)
});

const connected = connect(mapStateToProps, {
	loadCategories: thunkCategory
});


const CategoriesPage: React.FC<ConnectedProps<typeof connected>> = (props) => {
	React.useEffect(() => {
		document.title = 'Categories';

		if(!props.categoriesState.loaded)
			props.loadCategories();
	}, []);

	return (
		<React.Fragment>
			<Breadcrumbs paths={[
				{name: 'Home', path: '/'},
				{name: 'Categories', path: '/categories'}
			]}/>

			{props.categoriesState.isLoading && <div>Loading...</div>}

			{
				props.categoriesState.error &&
					<div className="red">{props.categoriesState.error}</div>
			}

			<CategoriesList
				categories={props.categoriesState.categories}
			/>
		</React.Fragment>
	);
};

export default connected(CategoriesPage);

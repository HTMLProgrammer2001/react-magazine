import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Paginate from '../Paginate';
import CategoriesList from './CategoriesList';
import {RootState} from '../../redux/Reducers';
import thunkCategory from '../../redux/ThunkActions/thunkCategory';


const mapStateToProps = (state: RootState) => ({
	categoriesState: state.category
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
			<Paginate paths={[
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

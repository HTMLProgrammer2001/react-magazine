import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {ICategory} from '../../Interfaces/ICategory';
import CategoryItem from './CategoryItem';
import {RootState} from '../../redux/Reducers';


const mapStateToProps = (state: RootState) => ({
	categories: state.category.categories
});

const connected = connect(mapStateToProps);

const CategoriesList: React.FC<ConnectedProps<typeof connected>> = (props) => (
	<div className="container">
		<div className="categories my-pad">
			{!props.categories.length && <b>Нет категорий</b>}

			{
				props.categories.map( (category: ICategory) => (
					<CategoryItem key={category.slug} category={category}/>
				))
			}
		</div>
	</div>
);

export default connected(CategoriesList);

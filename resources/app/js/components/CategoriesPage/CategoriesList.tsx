import * as React from 'react';

import {ICategory} from '../../Interfaces/ICategory';
import CategoryItem from './CategoryItem';


type ICategoriesListProps = {
	categories: ICategory[]
}

const CategoriesList: React.FC<ICategoriesListProps> = (props) => (
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

export default CategoriesList;

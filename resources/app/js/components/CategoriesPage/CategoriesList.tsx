import * as React from 'react';

import {ICategory} from '../../Interfaces/ICategory';
import CategoryItem from './CategoryItem';


const categories: Array<ICategory> = [{
	name: 'Test',
	slug: 'man',
	image: '/image/product.png',
	productCount: 20
}, {
	name: 'Test2',
	slug: 'woman',
	image: '/image/product.png',
	productCount: 341
}, {
	name: 'Test',
	slug: 'man',
	image: '/image/product.png',
	productCount: 227
}];

const CategoriesList: React.FC<{}> = () => (
	<div className="container">
		<div className="categories my-pad">
			{!categories.length && <b>Нет категорий</b>}

			{
				categories.map( (category: ICategory) => (
					<CategoryItem key={category.slug} category={category}/>
				))
			}
		</div>
	</div>
);

export default CategoriesList;

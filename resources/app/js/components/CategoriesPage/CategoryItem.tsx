import * as React from 'react';
import {Link} from 'react-router-dom';

import {ICategory} from '../../Interfaces/ICategory';


type ICategoryItemProps = {
	category: ICategory
};

const CategoryItem: React.FC<ICategoryItemProps> = (props) => (
	<Link to={`/categories/${props.category.slug}`}
		  className="categories__item">

		<img className="categories__img" src={props.category.image} alt="Category"/>

		<div className="categories__products center w-100"
			 style={{flexDirection: 'column'}}>

			<div>{props.category.name}</div>
			<div>{props.category.productCount} products</div>
		</div>

	</Link>
);

export default CategoryItem;

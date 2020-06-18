import * as React from 'react';
import {Link} from 'react-router-dom';


type ICategory = {
	name: string,
	slug: string,
	image?: string,
	productCount: number
}

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
					<Link to={`/categories/${category.slug}`}
						  key={category.slug}
						  className="categories__item">

						<img className="categories__img" src={category.image} alt="Category"/>

						<div className="categories__products center w-100"
							 	style={{flexDirection: 'column'}}>

							<div>{category.name}</div>
							<div>{category.productCount} products</div>
						</div>

					</Link>
				))
			}
		</div>
	</div>
);

export default CategoriesList;

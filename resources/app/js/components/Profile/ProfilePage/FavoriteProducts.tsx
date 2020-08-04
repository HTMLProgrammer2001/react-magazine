import * as React from 'react';
import {IProduct} from '../../../Interfaces/IProduct';
import FavoriteProductItem from './FavoriteProductItem';


const FavoriteProducts: React.FC<{}> = () => {
	const [products, setProducts] = React.useState<Array<IProduct>>([]);

	const getProducts = () => {

	};

	return (
		<div className="container">
			<div className="sales my-pad">
				<h3>Top sales</h3>

				<div className="sales__list goods__list">
					{
						products.map((p) => (
							<FavoriteProductItem key={p.id} {...p}/>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default FavoriteProducts;

import * as React from 'react';
import {Link} from 'react-router-dom';

import {IProduct} from '../../../../Interfaces/IProduct';


type IGoodItemProps = {
	product: IProduct
}

const GoodItem: React.FC<IGoodItemProps> = (props) => (
	<div className="goods__list-product">
		<Link to={`/products/${props.product.slug}`} className="w-100">
			<img
				className="goods__list-photo w-100"
				src={props.product.photo}
				alt="Product photo"
			/>
		</Link>

		<div className="goods__list-info">
			<div className="goods__list-name">
				{props.product.name}
			</div>

			<div className="goods__list-price">
				{props.product.price}
			</div>
		</div>

		{/*<div className="goods__list-sale">Sale</div>*/}
	</div>
);

export default GoodItem;

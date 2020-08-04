import * as React from 'react';
import {IProduct} from '../../../Interfaces/IProduct';
import {Link} from 'react-router-dom';


const FavoriteProductItem: React.FC<IProduct> = (props) => (
	<Link to={`/product/${props.slug}`}>
		<div className="goods__list-product">
			<a href="#" style={{width: '100%'}}>
				<img
					className="goods__list-photo"
					src={`/image/${props.photo}`}
					alt="Product photo"
				/>
			</a>

			<div className="goods__list-info">
				<div className="goods__list-name">{props.name}</div>
				<div className="goods__list-price">{props.price}</div>
			</div>
		</div>
	</Link>
);

export default FavoriteProductItem;

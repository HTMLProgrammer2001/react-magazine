import * as React from 'react';
import {IProduct} from '../../Interfaces/IProduct';
import {Link} from 'react-router-dom';


const Item: React.FC<IProduct> = (props) => (
	<Link to={`/products/${props.slug}`}>
		<div className="search__item">
			<img
				src={`/image/${props.photo}`}
				alt="Product photo"
				className="search__photo"
			/>

			<div className="search__info">
				<div className="bold">{props.name}</div>

				<div>
					{
						props.colors.map((color) => (
							<div key={color}
								className="goods__color-item"
								style={{background: color}}
							/>
						))
					}
				</div>

				<div>
					{props.sizes.join(', ')}
				</div>

				<div className="bold">
					{props.price}
				</div>
			</div>
		</div>
	</Link>
);

export default Item;

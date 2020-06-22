import * as React from 'react';

import {ICartItem} from '../../../Interfaces/ICartItem';


const CartItem: React.FC<ICartItem> = (props) => (
	<div className="table__row">
		<div className="table__col orders__product">
			<img
				className="orders__img"
				src={props.product.photo}
				alt="Product picture"
			/>

			<div>
				<div className="orders__name">{props.product.name}</div>

				<div className="orders__color">
					<div className="goods__color-item goods__color-item_black"/>
					<div className="orders__size">{props.size}</div>
				</div>
			</div>
		</div>

		<div className="table__col orders__price">
			{props.product.price}
		</div>

		<div className="table__col orders__quantity">
			<div className="order__quantity">

				<span
					className="order__quantity-count"
					contentEditable="true"
				>
					{props.count}
				</span>

			</div>
		</div>

		<div className="table__col orders__total">
			{props.count * props.product.price}
		</div>

		<div className="table__col orders__remove">
			<i className="fas fa-times cur"/>
		</div>
	</div>
);

export default CartItem;

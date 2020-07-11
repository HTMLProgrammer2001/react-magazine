import * as React from 'react';
import {ICartItem} from '../../../Interfaces/ICartItem';


type ICartItemProps = ICartItem & {
	removeItem: () => void
};

const CartItem: React.FC<ICartItemProps> = (props) => (
	<div className="table__row">
		<div className="table__col orders__product">
			<img
				className="orders__img"
				src={`/image/${props.product.photo}`}
				alt="Product picture"
			/>

			<div>
				<div className="orders__name">{props.product.name}</div>

				<div className="orders__color">
					<div className="goods__color-item" style={{background: props.color}}/>
					<div className="orders__size">{props.size}</div>
				</div>
			</div>
		</div>

		<div className="table__col orders__price">
			{props.product.price}
		</div>

		<div className="table__col orders__quantity">
			<div className="order__quantity">
				<span>{props.count}</span>
			</div>
		</div>

		<div className="table__col orders__total">
			{props.count * props.product.price}
		</div>

		<div className="table__col orders__remove">
			<i
				className="fas fa-times cur"
				onClick={props.removeItem}
			/>
		</div>
	</div>
);

export default CartItem;

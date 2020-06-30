import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../../redux/Reducers';
import {ICartItem} from '../../../../Interfaces/ICartItem';


const mapStateToProps = (state: RootState) => ({
	cartItems: state.cart
});

const connected = connect(mapStateToProps);

type ICartListProps = ConnectedProps<typeof connected>;

const CartList: React.FC<ICartListProps> = (props) => {
	const cartPrice: number = props.cartItems.reduce((prev, data) => (
		prev + data.product.price * data.count
	), 0);

	return (
		<ul className="header__product-list">
			{!props.cartItems.length && <b>Нет товаров</b>}

			{
				props.cartItems.map((item: ICartItem, index) => (
					<li className="header__product-item" key={index}>
						<span>{item.product.name} x {item.count}</span>
						<span>${(item.product.price * item.count).toFixed(2)}</span>
						<span>&times;</span>
					</li>
				))
			}

			{props.cartItems.length &&
			<li className="header__product-item">
				<b>Total</b>
				<span/>
				<b>${cartPrice.toFixed(2)}</b>
			</li>
			}
		</ul>
	);
};

export default connected(CartList);
import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../../redux/Reducers';


const connected = connect((state: RootState) => ({
	cartItems: state.cart,
	totalPrice: state.cart.reduce((prev, item) => (
		prev + item.count * item.product.price
	), 0)
}));

const PaymentList: React.FC<ConnectedProps<typeof connected>> = (props) => (
	<div className="payment__order">
		<div className="payment__head">My Order</div>
		<div className="payment__order-list">
			<div className="payment__order-item">
				<b>Product</b><b>Total</b>
			</div>

			{
				props.cartItems.map((item, index) => (
					<div key={index} className="payment__order-item">
						<span>{item.product.name} x {item.count}</span>
						<span>${(item.product.price * item.count).toFixed(2)}</span>
					</div>
				))
			}

			<div className="payment__order-item">
				<span>Shipping</span>
				<span>FREE SHIPPING</span>
			</div>

			<div className="payment__order-item">
				<b>Total</b>
				<b>
					${props.totalPrice.toFixed(2)}
				</b>
			</div>
		</div>
	</div>
);

export default connected(PaymentList);

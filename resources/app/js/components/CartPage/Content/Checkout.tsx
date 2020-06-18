import * as React from 'react';

import {ICartItem} from '../../../redux/cart';

type ICartCheckoutProps = {
	cartItems: Array<ICartItem>
};


const Checkout: React.FC<ICartCheckoutProps> = (props) => {
	const cartPrice = props.cartItems.reduce((prev, item) => (
		prev + item.count * item.product.price
	), 0).toFixed(2);


	return (
		<div className="container">
			<div className="check my-pad">
				<div className="check__box">
					<b className="check__head mb-10">Cart Total</b>

					<div className="check__subtotal mb-10 row space-between">
						<div className="check__subtotal-head">Subtotal:</div>

						<div className="check__subtotal-price">
							${cartPrice}
						</div>
					</div>

					<div className="check__shipping mb-10 row space-between">
						<div className="check__shipping-head">Shipping:</div>
						<div className="check__shipping-list">FREE SHIPPING</div>
					</div>

					<hr/>

					<div className="check__result mb-10 row space-between">
						<div className="check__result-head">Total</div>
						<div className="check__result-price">
							${cartPrice}
						</div>
					</div>
				</div>

				<button type="button" className="check__but my-pad">Checkout</button>
			</div>
		</div>
	);
};

export default Checkout;

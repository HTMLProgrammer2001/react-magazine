import * as React from 'react';
import {Link} from 'react-router-dom';

import CartList from './CartList';


const CartDropdown: React.FC<{}> = () => (
	<div className="dropdown__body">
		<div className="dropdown__content">
			<CartList/>

			<div className="row space-between w-100">
				<Link to="/cart">
					<button type="button" className="check__but sm">
						View Cart
					</button>
				</Link>

				<Link to="/checkout">
					<button type="button" className="check__but sm">
						Checkout
					</button>
				</Link>
			</div>
		</div>
	</div>
);

export default CartDropdown;

import * as React from 'react';

import CartList from './CartList';


const CartDropdown: React.FC<{}> = () => (
	<div className="dropdown__body">
		<div className="dropdown__content">
			<CartList/>

			<div className="row space-between w-100">
				<span/>
				<button type="button" className="check__but sm">
					Checkout
				</button>
			</div>
		</div>
	</div>
);

export default CartDropdown;

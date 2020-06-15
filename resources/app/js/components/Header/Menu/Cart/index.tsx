import * as React from 'react';
import c from 'classnames';

import CartDropdown from './CartDropdown';
import {IMenuProps} from '../Search';


const Cart: React.FC<IMenuProps> = (props) => {
	const dropClasses = c('header__icon header__icon_badge dropdown', {
		active: props.openMenu == 'cart'
	});

	return (
		<React.Fragment>
			<span className={dropClasses}>
				<i className="fas fa-shopping-bag dropdown__elem"
				   onClick={() => {
						props.changeOpen((prev) => prev=='cart' ? '' : 'cart');
					}}/>

				<span className="badge">2</span>

				<CartDropdown/>
			</span>
		</React.Fragment>
	);
};

export default Cart;

import * as React from 'react';
import c from 'classnames';
import {connect, ConnectedProps} from 'react-redux';

import {IMenuProps} from '../Search';
import CartDropdown from './CartDropdown';
import {RootState} from '../../../../redux';
import {selectCartCount} from '../../../../redux/AppState/cart/selectors';


const mapStateToProps = (state: RootState) => ({
	count: selectCartCount(state)
});

const connected = connect(mapStateToProps);

type IMenuCartProps = IMenuProps & ConnectedProps<typeof connected>;

const Cart: React.FC<IMenuCartProps> = (props) => {
	const dropClasses = c('header__icon header__icon_badge dropdown', {
		active: props.openMenu == 'cart'
	});

	return (
		<React.Fragment>
			<span className={dropClasses}>
				<i className="fas fa-shopping-bag dropdown__elem"
				   onClick={() => {
						props.changeOpen((prev) => prev == 'cart' ? '' : 'cart');
					}}/>

				<span className="badge">{props.count}</span>

				<CartDropdown/>
			</span>
		</React.Fragment>
	);
};

export default connected(Cart);

import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {ICartItem} from '../../../Interfaces/ICartItem';
import CartItem from './CartItem';
import {RootState} from '../../../redux';
import {selectCartItems} from '../../../redux/AppState/cart/selectors';
import {cartRemove, cartReset} from '../../../redux/AppState/cart/actions';
import thunkCart from '../../../redux/AppState/cart/thunks';


const mapStateToProps = (state: RootState) => ({
	cartItems: selectCartItems(state)
});

const connected = connect(mapStateToProps, {
	removeItem: cartRemove,
	clearCart: cartReset,
	updateCart: thunkCart
});

const CartTable: React.FC<ConnectedProps<typeof connected>> = (props) => (
	<div className="container">
		<div className="table__wrap my-pad">
			<div className="table">
				<div className="table__head">
					<div className="table__head-item table__head-item_lg">Product</div>
					<div className="table__head-item">Price</div>
					<div className="table__head-item">Quantity</div>
					<div className="table__head-item">Total</div>
					<div className="table__head-item"/>
				</div>

				<div className="table__content">
					{
						props.cartItems.map((item: ICartItem, index) => (
							<CartItem
								key={index}
								removeItem={() => props.removeItem(index)}
								{...item}
							/>
						))
					}
				</div>

			</div>
		</div>
		<div className="orders__actions">
			<div
				className="orders__clear"
				onClick={props.clearCart}
			>Clear cart</div>

			<div
				className="orders__update"
				onClick={props.updateCart}
			>Update cart</div>
		</div>
	</div>
);

export default connected(CartTable);


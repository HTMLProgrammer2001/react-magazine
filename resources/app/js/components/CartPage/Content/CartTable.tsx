import * as React from 'react';

import {ICartItem} from '../../../Interfaces/ICartItem';
import CartItem from './CartItem';


type ICartTableProps = {
	cartItems: Array<ICartItem>
};

const CartTable: React.FC<ICartTableProps> = (props) => (
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
							<CartItem key={index} {...item}/>
						))
					}
				</div>

			</div>
		</div>
		<div className="orders__actions">
			<div className="orders__clear">Clear cart</div>
			<div className="orders__update">Update cart</div>
		</div>
	</div>
);

export default CartTable;

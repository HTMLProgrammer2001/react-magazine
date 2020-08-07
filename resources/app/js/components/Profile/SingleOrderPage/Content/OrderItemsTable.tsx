import * as React from 'react';
import {IOrderItem} from '../../../../Interfaces/IOrderItem';
import CartItem from '../../../CartPage/Content/CartItem';


type IOrderItemsTableProps = {
	items: IOrderItem[]
};

const OrderItemsTable: React.FC<IOrderItemsTableProps> = (props) => (
	<div className="container">
		<div className="table__wrap my-pad">
			<div className="table">
				<div className="table__head">
					<div className="table__head-item table__head-item_lg">Product</div>
					<div className="table__head-item">Price</div>
					<div className="table__head-item">Quantity</div>
					<div className="table__head-item">Total</div>
				</div>

				<div className="table__content">
					{
						props.items.map((item: IOrderItem, index) => (
							<CartItem {...item} key={index}/>
						))
					}
				</div>

			</div>
		</div>
	</div>
);

export default OrderItemsTable;

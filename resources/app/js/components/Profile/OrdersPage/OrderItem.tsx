import * as React from 'react';
import {IOrder} from '../../../Interfaces/IOrder';


type IOrderItemProps = {
	order: IOrder
}

export const OrderItem: React.FC<IOrderItemProps> = ({order}) => (
	<div className="table__row">
		<div className="table__col">#{order.id}</div>
		<div className="table__col">{order.date}</div>
		<div className="table__col">${order.price.toFixed(2)}</div>
		<div className="table__col">{order.products}</div>
		<div className="table__col">{order.status}</div>
	</div>
);

export default OrderItem;

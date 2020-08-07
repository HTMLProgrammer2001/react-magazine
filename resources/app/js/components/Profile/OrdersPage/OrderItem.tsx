import * as React from 'react';
import {IOrder} from '../../../Interfaces/IOrder';
import {Link} from 'react-router-dom';


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
		<div className="table__col">
			<Link to={`/profile/orders/${order.id}`}>
				<i className="fas fa-eye ml-10 cur"/>
			</Link>
		</div>
	</div>
);

export default OrderItem;

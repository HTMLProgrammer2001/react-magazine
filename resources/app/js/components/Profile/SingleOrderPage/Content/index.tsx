import * as React from 'react';

import {RootState} from '../../../../redux';
import {connect, ConnectedProps} from 'react-redux';
import {selectSingleOrder} from '../../../../redux/Profile/singleOrder/selectors';
import OrderItemsTable from './OrderItemsTable';
import {IFullOrder} from '../../../../Interfaces/IFullOrder';


const mapStateToProps = (state: RootState) => ({
	...selectSingleOrder(state)
});

const connected = connect(mapStateToProps, null);

const Content: React.FC<ConnectedProps<typeof connected>> = (props: IFullOrder) => (
	<div className="single_order__content">
		<div>
			<b>ID: </b>
			<span>{props.id}</span>
		</div>

		<div>
			<b>Order date: </b>
			<span>{props.date}</span>
		</div>

		<div>
			<b>Status: </b>
			<span>{props.status}</span>
		</div>

		<div>
			<b>Order price: </b>
			<span>{props.price}</span>
		</div>

		<OrderItemsTable items={props.productsItems}/>
	</div>
);

export default connected(Content);

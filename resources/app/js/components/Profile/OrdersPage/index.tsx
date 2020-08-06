import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import OrdersForm from './OrdersForm';
import Paginator from '../Paginator';
import {RootState} from '../../../redux';
import {selectOrdersState} from '../../../redux/Profile/orders/selectors';
import thunkOrders from '../../../redux/Profile/orders/thunks/thunkOrders';
import {ordersReset} from '../../../redux/Profile/orders/actions';
import Loader from '../../Loader';
import OrderItem from './OrderItem';


const mapStateToProps = (state: RootState) => ({
	...selectOrdersState(state)
});

const connected = connect(mapStateToProps, (dispatch: any) => ({
	getOrders(page: number = 1){
		dispatch(thunkOrders(page));
	},
	changeFilter(){
		dispatch(ordersReset());
		dispatch(thunkOrders());
	}
}));

type IOrdersPageProps = ConnectedProps<typeof connected>;

const OrdersPage: React.FC<IOrdersPageProps> = (props) => {
	React.useEffect(() => {
		props.getOrders();
	}, []);

	return (
		<div className="admContent">
			<div className="container">
				<div className="myOrders py-pad">
					<div className="pull-right">
						<Link to="/">
							<span className="but but_outline">Continue shopping</span>
						</Link>
					</div>

					<h3>My orders</h3>

					<OrdersForm onSubmit={props.changeFilter}/>

					<div className="table__wrap">
						<div className="table">
							<div className="table__head">
								<div className="table__head-item">ID</div>
								<div className="table__head-item">Date</div>
								<div className="table__head-item">Price</div>
								<div className="table__head-item">Products</div>
								<div className="table__head-item">Status</div>
							</div>

							<div className="table__content">
								{props.isLoading && <Loader/>}
								{props.error && <div className="red">{props.error}</div>}

								{
									!props.isLoading && !props.error &&
									props.orders.map((order) => (
										<OrderItem
											key={order.id}
											order={order}
										/>
									))
								}
							</div>
						</div>
					</div>
				</div>

				<Paginator
					totalPage={Math.ceil(props.totalCount / props.size)}
					curPage={props.currentPage}
					handler={props.getOrders}
				/>
			</div>
		</div>
	);
}

export default connected(OrdersPage);

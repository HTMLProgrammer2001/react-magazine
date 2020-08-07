import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../../redux';
import {selectSingleOrderState} from '../../../redux/Profile/singleOrder/selectors';
import thunkSingleOrder from '../../../redux/Profile/singleOrder/thunks';
import Loader from '../../Loader';
import NotFoundImg from '../../NotFoundPage/NotFoundImg';
import Content from './Content';


const mapStateToProps = (state: RootState) => ({
	...selectSingleOrderState(state)
});

const connected = connect(mapStateToProps, {
	getOrder: thunkSingleOrder
});

type ISingleOrderPageProps = RouteComponentProps<{orderID: string}> &
	ConnectedProps<typeof connected>;

const SingleOrderPage: React.FC<ISingleOrderPageProps> = (props) => {
	React.useEffect(() => {
		props.getOrder(+props.match.params.orderID);
	}, []);

	return (
		<div className="admContent">
			<div className="container">
				{props.isLoading && <Loader/>}
				{props.error && <div className="red">{props.error}</div>}
				{props.notFound && <NotFoundImg/>}

				{props.order && <Content/>}
			</div>
		</div>
	);
};

export default connected(SingleOrderPage);

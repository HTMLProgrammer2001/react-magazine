import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../redux/';
import Paginate from '../Paginate';
import Empty from './Empty';
import Content from './Content/';


//Redux data to props
const mapStateToProps = (state: RootState) => ({
	cart: state.cart
});

const cartConnected = connect(mapStateToProps);

type ICartProps = ConnectedProps<typeof cartConnected>;

const CartPage: React.FC<ICartProps> = (props: ICartProps) => {
	React.useEffect(() => {
		document.title = 'Cart';
	}, []);

	return (
		<React.Fragment>
			<Paginate paths={[{name: 'Home', path: '/'}, {name: 'Cart', path: '/cart'}]}/>

			{props.cart.length ? <Content cartItems={props.cart}/> : <Empty/>}
		</React.Fragment>
	);
};

export default cartConnected(CartPage);

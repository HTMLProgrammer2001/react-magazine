import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../redux/Reducers/';
import Paginate from '../Paginate';
import Empty from './Empty';
import Content from './Content/';


//Redux data to props
const mapStateToProps = (state: RootState) => ({
	isEmpty: !state.cart.length
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

			{props.isEmpty ? <Empty/> : <Content/>}
		</React.Fragment>
	);
};

export default cartConnected(CartPage);

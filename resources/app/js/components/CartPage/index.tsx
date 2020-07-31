import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import Empty from './Empty';
import Content from './Content/';
import {RootState} from '../../redux';
import {selectCartCount} from '../../redux/AppState/cart/selectors';


//Redux data to props
const mapStateToProps = (state: RootState) => ({
	isEmpty: !selectCartCount(state)
});

const cartConnected = connect(mapStateToProps);

type ICartProps = ConnectedProps<typeof cartConnected>;

const CartPage: React.FC<ICartProps> = (props: ICartProps) => {
	React.useEffect(() => {
		document.title = 'Cart';
	}, []);

	return (
		<React.Fragment>
			<Breadcrumbs paths={[{name: 'Home', path: '/'}, {name: 'Cart', path: '/cart'}]}/>

			{props.isEmpty ? <Empty/> : <Content/>}
		</React.Fragment>
	);
};

export default cartConnected(CartPage);

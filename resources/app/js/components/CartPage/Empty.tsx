import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import thunkCart from '../../redux/AppState/cart/thunks';


const connected = connect(null, {
	updateCart: thunkCart
});

type IEmptyProps = ConnectedProps<typeof connected>;

const EmptyCart: React.FC<IEmptyProps> = (props) => (
	<div className="empty my-pad">
		<div className="container">
			<div className="empty__text">Your cart is current empty</div>
			<Link to="/">
				<button type="button" className="empty__back">Return to shop</button>
			</Link>

			<div className="empty__back" onClick={props.updateCart}>
				Update cart
			</div>
		</div>
	</div>
);

export default connected(EmptyCart);

import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {RootState} from '../../../redux';
import {selectCartPrice} from '../../../redux/AppState/cart/selectors';



const mapStateToProps = (state: RootState) => ({
	cartPrice: selectCartPrice(state)
});

const connected = connect(mapStateToProps);


const Checkout: React.FC<ConnectedProps<typeof connected>> = (props) => (
	<div className="container">
		<div className="check my-pad">
			<div className="check__box">
				<b className="check__head mb-10">Cart Total</b>

				<div className="check__subtotal mb-10 row space-between">
					<div className="check__subtotal-head">Subtotal:</div>

					<div className="check__subtotal-price">
						${props.cartPrice}
					</div>
				</div>

				<div className="check__shipping mb-10 row space-between">
					<div className="check__shipping-head">Shipping:</div>
					<div className="check__shipping-list">FREE SHIPPING</div>
				</div>

				<hr/>

				<div className="check__result mb-10 row space-between">
					<div className="check__result-head">Total</div>
					<div className="check__result-price">
						${props.cartPrice}
					</div>
				</div>
			</div>

			<NavLink to="/checkout" className="check__but my-pad">
				Checkout
			</NavLink>
		</div>
	</div>
);

export default connected(Checkout);

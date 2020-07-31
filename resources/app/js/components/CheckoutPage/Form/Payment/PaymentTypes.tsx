import * as React from 'react';
import {Field, formValueSelector} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../../redux';


const selector = formValueSelector('billing');

const connected = connect((state: RootState) => ({
	type: selector(state, 'payment')
}));

const PaymentTypes: React.FC<ConnectedProps<typeof connected>> = (props) => (
	<div className="payment__types">
		<div className="payment__head">Payment</div>
		<div className="payment__type">
			<div className="radio">
				<Field
					component="input"
					type="radio"
					name="payment"
					value="paypal"
					className="radio__elem"
					id="paypal"
				/>

				<label className="radio__label" htmlFor="paypal">
					<span>Paypal</span>
				</label>
			</div>
			<div className={`payment__content ${props.type != 'paypal' ? 'hidden' : ''}`}>
				Paypal payment type
			</div>
		</div>

		<div className="payment__type">
			<div className="radio">
				<Field
					component="input"
					type="radio"
					name="payment"
					value="bank"
					className="radio__elem"
					id="bank"
				/>

				<label className="radio__label" htmlFor="bank">
					<span>Direct Bank Transfer</span>
				</label>
			</div>
			<div className={`payment__content ${props.type != 'bank' ? 'hidden' : ''}`}>
				Direct bank transaction on our card
			</div>
		</div>

		<div className="payment__type">
			<div className="radio">
				<Field
					component="input"
					type="radio"
					name="payment"
					value="deliver"
					className="radio__elem"
					id="deliver"
				/>

				<label className="radio__label" htmlFor="deliver">
					<span>Cash on delivery</span>
				</label>
			</div>
			<div className={`payment__content ${props.type != 'deliver' ? 'hidden' : ''}`}>
				You receive your order via post office and cash on delivery
			</div>
		</div>
	</div>
);

export default connected(PaymentTypes);

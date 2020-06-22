import * as React from 'react';

import PaymentList from './PaymentList';
import PaymentTypes from './PaymentTypes';


const Payment: React.FC<{}> = () => (
	<div className="container">
		<div className="payment my-pad row">
			<PaymentList/>
			<PaymentTypes/>
		</div>
		<div className="space-between row mb-10">
			<div/>
			<button type="submit" className="check__but">Place order</button>
		</div>
	</div>
);

export default Payment;

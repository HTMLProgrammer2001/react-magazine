import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Paginate from '../Paginate';
import Questions from './Questions';
import BillingForm, {IBillingFormData} from './Form/BillingForm';
import thunkCheckout from '../../redux/ThunkActions/thunkCheckout';


const connected = connect(null, {
	checkout: thunkCheckout
});

const CheckoutPage: React.FC<ConnectedProps<typeof connected>> = (props) => {
	React.useEffect(() => {
		document.title = 'Checkout';
	}, []);

	let onSubmit = (vals: IBillingFormData) => {
		console.log(vals);
		props.checkout(vals, 'billing');
	};

	return (
		<React.Fragment>
			<Paginate paths={[{
				name: 'Home',
				path: '/'
			},
			{
				name: 'Checkout',
				path: '/checkout'
			}]}/>

			<Questions/>
			<BillingForm onSubmit={onSubmit}/>
		</React.Fragment>
	);
};

export default connected(CheckoutPage);

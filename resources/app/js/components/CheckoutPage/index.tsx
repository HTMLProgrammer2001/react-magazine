import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import Questions from './Questions';
import BillingForm, {IBillingFormData} from './Form/BillingForm';
import thunkCheckout from '../../redux/checkout/thunks';


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
			<Breadcrumbs paths={[{
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

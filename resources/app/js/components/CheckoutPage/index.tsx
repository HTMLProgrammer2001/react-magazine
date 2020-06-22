import * as React from 'react';

import Paginate from '../Paginate';
import Questions from './Questions';
import BillingForm from './Form/BillingForm';


const CheckoutPage: React.FC<{}> = () => {
	React.useEffect(() => {
		document.title = 'Checkout';
	}, []);

	let onSubmit = (vals: any) => {
		console.log(vals);
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

export default CheckoutPage;

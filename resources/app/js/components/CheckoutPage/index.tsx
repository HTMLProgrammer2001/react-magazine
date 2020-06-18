import * as React from 'react';

import Paginate from '../Paginate';


const CheckoutPage: React.FC<{}> = () => {
	React.useEffect(() => {
		document.title = 'Checkout';
	}, []);

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
		</React.Fragment>
	);
};

export default CheckoutPage;

import * as React from 'react';

import CartTable from './CartTable';
import Checkout from './Checkout';


const Content: React.FC<{}> = () => (
	<React.Fragment>
		<CartTable/>
		<Checkout/>
	</React.Fragment>
);

export default Content;

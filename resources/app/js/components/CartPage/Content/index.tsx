import * as React from 'react';

import {ICartItem} from '../../../Interfaces/ICartItem';
import CartTable from './CartTable';
import Checkout from './Checkout';


type ICartContentProps = {
	cartItems: Array<ICartItem>
}

const Content: React.FC<ICartContentProps> = (props) => (
	<React.Fragment>
		<CartTable cartItems={props.cartItems}/>
		<Checkout cartItems={props.cartItems}/>
	</React.Fragment>
);

export default Content;

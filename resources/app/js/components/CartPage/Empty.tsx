import * as React from 'react';
import {Link} from 'react-router-dom';


const EmptyCart: React.FC<{}> = () => (
	<div className="empty my-pad">
		<div className="container">
			<div className="empty__text">Your cart is current empty</div>
			<Link to="/">
				<button type="button" className="empty__back">Return to shop</button>
			</Link>
		</div>
	</div>
);

export default EmptyCart;

import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';

import Breadcrumbs from '../Breadcrumbs';
import Questions from './Questions';
import BillingForm, {IBillingFormData} from './Form/BillingForm';
import Empty from '../CartPage/Empty';

import thunkCheckout from '../../redux/checkout/thunks';
import {RootState} from '../../redux';
import {selectCartCount} from '../../redux/AppState/cart/selectors';


const mapStateToProps = (state: RootState) => ({
	isEmpty: !selectCartCount(state)
});

const connected = connect(mapStateToProps, {
	checkout: thunkCheckout
});


type ICheckoutProps = ConnectedProps<typeof connected> & RouteComponentProps<{}>;

const CheckoutPage: React.FC<ICheckoutProps> = (props) => {
	React.useEffect(() => {
		document.title = 'Checkout';
	}, []);

	let onSubmit = (vals: IBillingFormData) => {
		console.log(vals);

		props.checkout(vals, 'billing').then((result: boolean) => {
			if(result){
				props.history.push('/thank');
			}
		});
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

			{
				props.isEmpty ?
					<Empty/> :
					<React.Fragment>
						<Questions/>
						<BillingForm onSubmit={onSubmit}/>
					</React.Fragment>
			}
		</React.Fragment>
	);
};

export default connected(CheckoutPage);

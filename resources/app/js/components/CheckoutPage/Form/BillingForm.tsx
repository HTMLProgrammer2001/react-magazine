import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';

import InputElement from '../../FormElements/InputElement';
import AccountForm, {IAccountFormData} from './CreateAccountForm';
import Payment from './Payment/';
import {RootState} from '../../../redux';
import {selectUser} from '../../../redux/AppState/user/selectors';


const mapStateToProps = (state: RootState) => ({
	user: selectUser(state)
});

const connected = connect(mapStateToProps, null);

export type IBillingFormData = {
	fullName?: string,
	country: string,
	city: string,
	postcode: string,
	address: string,
	email?: string,
	notes: string,
	payment: string
} & IAccountFormData;

type IOwnProps = ConnectedProps<typeof connected>;
type IBillingProps = InjectedFormProps<IBillingFormData, {}> & IOwnProps;

const BillingForm: React.FC<IBillingProps> = (props: any) => (
	<div className="container">
		<div className="billing my-pad">
			<div className="billing__head">Billing Details</div>

			<form className="billing__form" onSubmit={props.handleSubmit} noValidate>
				{
					!props.user &&
						<Field component={InputElement}
						   placeholder="Full name"
						   name="fullName"
						   type="text"
						   required/>
				}

				<Field component={InputElement}
					   placeholder="Country"
					   name="country"
					   type="text"
					   required/>

				<div className="row">
					<Field component={InputElement}
						   placeholder="Town / City"
						   name="city"
						   type="text"
						   className="mr-1"
						   required/>

					<Field component={InputElement}
						   placeholder="Postcode / Zip"
						   name="postcode"
						   type="text"
						   className="ml-1"
						   required/>
				</div>

				<Field component={InputElement}
					   placeholder="Street Address"
					   name="address"
					   type="text"
					   required/>

				<Field component={InputElement}
					   placeholder="Phone"
					   name="phone"
					   type="text"
					   required/>

				{
					!props.user &&
						<Field component={InputElement}
						   placeholder="Email address"
						   name="email"
						   type="email"
						   required/>
				}

				{
					!props.user &&
						<AccountForm/>
				}

				<div>Order Notes</div>
				<div className="text-muted">Notes about your order like delivery species e.g.</div>
				<div className="input">
					<Field component="textarea"
						   className="input__elem"
						   rows={1}
						   name="notes"
					/>

					<div className="input__line" style={{bottom: '4px'}}/>
				</div>

				<Payment/>
			</form>
		</div>
	</div>
);

const BillingFormRedux = connected(BillingForm);

export default reduxForm<IBillingFormData, {}>({
	form: 'billing'
})(BillingFormRedux);

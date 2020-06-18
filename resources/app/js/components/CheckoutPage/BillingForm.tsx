import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';
import CreateAccountForm from './CreateAccountForm';
import Payment from './Payment';


type IBillingProps = InjectedFormProps<{}, {}>;

const BillingForm: React.FC<IBillingProps> = (props) => (
	<div className="container">
		<div className="billing my-pad">
			<div className="billing__head">Billing Details</div>

			<form className="billing__form" onSubmit={props.handleSubmit}>
				<div className="row">
					<Field component={InputElement}
						   placeholder="First Name"
						   name="first"
						   type="text"
						   className="mr-1"
						   required/>

					<Field component={InputElement}
						   placeholder="Last Name"
						   name="last"
						   type="text"
						   className="ml-1"
						   required/>
				</div>

				<Field component={InputElement}
					   placeholder="Company Name"
					   name="company"
					   type="text"
					   required/>

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

				<Field component={InputElement}
					   placeholder="Email address"
					   name="email"
					   type="email"
					   required/>

				<CreateAccountForm/>

				<div>Order Notes</div>
				<div className="text-muted">Notes about your order like delivery species e.g.</div>
				<div className="input">
					<textarea className="input__elem" required rows={1}/>
					<div className="input__line" style={{bottom: '4px'}}/>
				</div>

				<Payment/>
			</form>
		</div>
	</div>
);

export default reduxForm({
	form: 'billing'
})(BillingForm);

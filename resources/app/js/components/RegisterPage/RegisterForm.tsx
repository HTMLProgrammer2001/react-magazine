import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';
import required from '../../Helpers/Validators/required';
import email from '../../Helpers/Validators/email';
import sizeBetween from '../../Helpers/Validators/sizeBetween';
import fullName from '../../Helpers/Validators/fullName';


export type IRegisterFormData = {
	fullName: string,
	email: string,
	password: string,
	password_confirmation: string
}

type IRegisterProps = InjectedFormProps<IRegisterFormData>;

const between = sizeBetween(6, 20);

const RegisterForm: React.FC<IRegisterProps> = (props) => (
	<div className="container">
		<form onSubmit={props.handleSubmit} className="login my-pad" noValidate>
			<div className="login__head">Sign in</div>

			{
				props.error &&
					<div className="red">{props.error}</div>
			}

			<Field component={InputElement} type="text" name="fullName"
				   placeholder="Full name" required validate={[required, fullName]}/>
			<Field component={InputElement} type="text" name="email"
				   placeholder="Email" required validate={[required, email]}/>
			<Field component={InputElement} type="password" name="password"
				   placeholder="Password" required validate={[required, between]}/>
			<Field component={InputElement} type="password" name="password_confirmation"
				   placeholder="Confirm password" required/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">
					{props.submitting ? 'Loading...' : 'Sign in'}
				</button>
			</div>
		</form>
	</div>
);

const validate = (values: IRegisterFormData) => {
	const errors: Partial<IRegisterFormData> = {};

	if(values.password_confirmation != values.password){
		errors.password_confirmation = 'Passwords are not equals';
	}

	return errors;
};

export default reduxForm<IRegisterFormData>({
	form: 'register',
	validate
})(RegisterForm);

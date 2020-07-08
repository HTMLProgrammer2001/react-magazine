import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';


export type IRegisterFormData = {
	fullName: string,
	email: string,
	password: string,
	password_confirmation: string
}

type IOwnProps = {
	registration: {
		isLoading: boolean,
		error: string | null,
		message: string
	}
}

type IRegisterProps = InjectedFormProps<IRegisterFormData, IOwnProps> & IOwnProps;

const RegisterForm: React.FC<IRegisterProps> = (props) => (
	<div className="container">
		<form onSubmit={props.handleSubmit} className="login my-pad" noValidate>
			<div className="login__head">Sign in</div>

			{
				props.registration.error &&
					<div className="red">{props.registration.error}</div>
			}

			<Field component={InputElement} type="text" name="fullName"
				   placeholder="Full name" required/>
			<Field component={InputElement} type="text" name="email"
				   placeholder="Email" required/>
			<Field component={InputElement} type="password" name="password"
				   placeholder="Password" required/>
			<Field component={InputElement} type="password" name="password_confirmation"
				   placeholder="Confirm password" required/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">
					{props.registration.isLoading ? 'Loading...' : 'Sign in'}
				</button>
			</div>
		</form>
	</div>
);

const validate = (values: IRegisterFormData) => {
	const errors: Partial<IRegisterFormData> = {};

	if(values.fullName?.trim().split(' ').length != 2){
		errors.fullName = 'Enter name and surname';
	}

	if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
		errors.email = 'Incorrect email';
	}

	if(values.password?.length < 8){
		errors.password = 'Password must be at least 8 chars';
	}

	if(values.password_confirmation != values.password){
		errors.password_confirmation = 'Passwords are not equals';
	}

	return errors;
};

export default reduxForm<IRegisterFormData, IOwnProps>({
	form: 'thunkRegister.ts',
	validate
})(RegisterForm);

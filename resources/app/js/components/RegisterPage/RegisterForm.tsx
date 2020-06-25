import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';


export type IRegisterFormData = {
	firstName: string,
	lastName: string,
	email: string,
	password: string,
	confirmPassword: string
}

type IRegisterProps = InjectedFormProps<IRegisterFormData, {}>;

const RegisterForm: React.FC<IRegisterProps> = (props) => (
	<div className="container">
		<form onSubmit={props.handleSubmit} className="login my-pad">
			<div className="login__head">Sign in</div>

			<Field component={InputElement} type="text" name="firstName"
				   placeholder="First name" required/>
			<Field component={InputElement} type="text" name="lastName"
				   placeholder="Last name" required/>
			<Field component={InputElement} type="text" name="email"
				   placeholder="Email" required/>
			<Field component={InputElement} type="password" name="password"
				   placeholder="Password" required/>
			<Field component={InputElement} type="password" name="confirmPassword"
				   placeholder="Confirm password" required/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">Sign in</button>
			</div>
		</form>
	</div>
);

export default reduxForm<IRegisterFormData>({
	form: 'register'
})(RegisterForm);

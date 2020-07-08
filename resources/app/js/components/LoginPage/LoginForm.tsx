import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';


export type ILoginFormData = {
	email: string,
	password: string
}

type IOwnProps = {
	loginData: {
		error: string | null,
		isLoading: boolean
	}
}

type ILoginProps = InjectedFormProps<ILoginFormData, IOwnProps> & IOwnProps;

const LoginForm: React.FC<ILoginProps> = (props) => (
	<div className="container">
		<form onSubmit={props.handleSubmit} className="login my-pad">
			<div className="login__head">Login</div>

			{
				props.loginData.error &&
					<div className="red">{props.loginData.error}</div>
			}

			<Field component={InputElement} type="text" name="email"
				   placeholder="Email" required/>
			<Field component={InputElement} type="password" name="password"
				   placeholder="Password" required/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">
					{props.loginData.isLoading ? 'Loading...' : 'Login'}
				</button>
			</div>
		</form>
	</div>
);

export default reduxForm<ILoginFormData, IOwnProps>({
	form: 'login'
})(LoginForm);

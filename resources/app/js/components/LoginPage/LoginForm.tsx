import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';
import required from '../../Helpers/Validators/required';
import email from '../../Helpers/Validators/email';
import sizeBetween from '../../Helpers/Validators/sizeBetween';
import {Link} from 'react-router-dom';


type IOwnProps = {
	loginState: {
		needReset: boolean,
		needResend: boolean
	}
};

export type ILoginFormData = {
	email: string,
	password: string
}

type ILoginProps = InjectedFormProps<ILoginFormData, IOwnProps> & IOwnProps;

const between = sizeBetween(6, 20);

const LoginForm: React.FC<ILoginProps> = (props) => (
	<div className="container">
		<form onSubmit={props.handleSubmit} className="login my-pad">
			<div className="login__head">Login</div>

			{
				props.error &&
					<div className="red">
						{props.error}
					</div>
			}

			{
				props.loginState.needReset &&
					<div className="red">
						<Link to="/reset">
							Reset
						</Link>
					</div>
			}

			{
				props.loginState.needResend &&
				<div className="red">
					<Link to="/resend">
						Resend
					</Link>
				</div>
			}

			<Field component={InputElement} type="text" name="email"
				   placeholder="Email" required validate={[required, email]}/>
			<Field component={InputElement} type="password" name="password"
				   placeholder="Password" required validate={[required, between]}/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">
					{props.submitting ? 'Loading...' : 'Login'}
				</button>
			</div>
		</form>
	</div>
);

export default reduxForm<ILoginFormData, IOwnProps>({
	form: 'login'
})(LoginForm);

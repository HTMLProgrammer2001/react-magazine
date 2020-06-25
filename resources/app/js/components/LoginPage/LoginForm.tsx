import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';


export type ILoginFormData = {
	email: string,
	password: string
}

type ILoginProps = InjectedFormProps<ILoginFormData, {}>;

const LoginForm: React.FC<ILoginProps> = (props) => (
	<div className="container">
		<form onSubmit={props.handleSubmit} className="login my-pad">
			<div className="login__head">Login</div>

			<Field component={InputElement} type="text" name="email"
				   placeholder="Email" required/>
			<Field component={InputElement} type="password" name="password"
				   placeholder="Password" required/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">Login</button>
			</div>
		</form>
	</div>
);

type C<T> = T extends string ? string : any;

export default reduxForm<ILoginFormData>({
	form: 'login'
})(LoginForm);

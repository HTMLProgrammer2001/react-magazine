import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';


type ILoginProps = InjectedFormProps<{}, {}>;

const LoginForm: React.FC<ILoginProps> = (props) => (
	<div className="container">
		<form onSubmit={props.handleSubmit} className="login my-pad">
			<div className="login__head">Login</div>

			<Field component={InputElement} type="email" name="email"
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

export default reduxForm({
	form: 'login'
})(LoginForm);

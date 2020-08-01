import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';
import required from '../../Helpers/Validators/required';
import email from '../../Helpers/Validators/email';


export type IResendFormData = {
	email: string
}

type IResendProps = InjectedFormProps<IResendFormData>;

const ResendForm: React.FC<IResendProps> = (props) => (
	<form className="reset" onSubmit={props.handleSubmit}>
		<div className="container my-pad">
			<div className="login__head">Resend verification email</div>

			{
				props.error &&
					<div className="red">{props.error}</div>
			}

			<Field component={InputElement} type="email" name="email"
				   placeholder="Email" required validate={[required, email]}/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">
					{props.submitting ? 'Loading...' : 'Reset'}
				</button>
			</div>
		</div>
	</form>
);

export default reduxForm<IResendFormData>({
	form: 'resend'
})(ResendForm);

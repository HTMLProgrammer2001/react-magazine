import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';
import required from '../../Helpers/Validators/required';
import email from '../../Helpers/Validators/email';


export type IResetFormData = {
	email: string
}

type IResetProps = InjectedFormProps<IResetFormData>;

const ResetForm: React.FC<IResetProps> = (props) => (
	<form className="reset" onSubmit={props.handleSubmit}>
		<div className="container my-pad">
			<div className="login__head">Reset password</div>

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

export default reduxForm<IResetFormData>({
	form: 'reset'
})(ResetForm);

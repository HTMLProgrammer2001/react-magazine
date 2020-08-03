import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';
import sizeBetween from '../../Helpers/Validators/sizeBetween';
import required from '../../Helpers/Validators/required';


export type IChangeFormData = {
	password: string,
	password_confirmation: string
}

type IChangeProps = InjectedFormProps<IChangeFormData>;

const size = sizeBetween(8, 20);

const ChangeForm: React.FC<IChangeProps> = (props) => (
	<div className="container">
		<form onSubmit={props.handleSubmit} className="login my-pad">
			<div className="login__head">Change password</div>

			{
				props.error &&
				<div className="red">{props.error}</div>
			}

			<Field component={InputElement} type="password" name="password"
				   placeholder="Password" required validate={[required, size]}/>
			<Field component={InputElement} type="password" name="password_confirmation"
				   placeholder="Password confirmation" required validate={[required]}/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">
					{props.submitting ? 'Loading...' : 'Change'}
				</button>
			</div>
		</form>
	</div>
);

const validate = (values: IChangeFormData) => {
	const errors: Partial<IChangeFormData> = {};

	if(values.password_confirmation != values.password){
		errors.password_confirmation = 'Passwords are not equals';
	}

	return errors;
};

export default reduxForm<IChangeFormData>({
	form: 'change',
	validate
})(ChangeForm);

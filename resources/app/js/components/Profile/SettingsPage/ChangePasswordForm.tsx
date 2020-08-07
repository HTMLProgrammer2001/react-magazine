import * as React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import InputElement from '../../FormElements/InputElement';
import required from '../../../Helpers/Validators/required';
import sizeBetween from '../../../Helpers/Validators/sizeBetween';


export type IChangePasswordData = {
	oldPassword: string,
	password: string,
	password_confirmation: string
};

type IChangePasswordProps = InjectedFormProps<IChangePasswordData>;

const size = sizeBetween(8, 20);

const ChangePasswordForm: React.FC<IChangePasswordProps> = (props) => (
	<form onSubmit={props.handleSubmit}>
		<div className="login__head">Security</div>

		<Field
			component={InputElement}
			type="password"
			name="oldPassword"
			placeholder="Current password"
			required
		/>

		<Field
			component={InputElement}
			type="password"
			name="password"
			placeholder="New password"
			required
			validate={[required, size]}
		/>

		<Field
			component={InputElement}
			type="password"
			name="password_confirmation"
			placeholder="Confirm password"
			required
			validate={[required, size]}
		/>

		<div className="row space-between my-pad w-100">
			<div/>
			<button type="submit" className="check__but">
				{props.submitting ? 'Loading...' : 'Update'}
			</button>
		</div>
	</form>
);

const validate = (values: IChangePasswordData) => {
	const errors: Partial<IChangePasswordData> = {};

	if(values.password_confirmation != values.password){
		errors.password_confirmation = 'Passwords are not equals';
	}

	return errors;
};

export default reduxForm<IChangePasswordData>({
	form: 'profileChangePassword',
	validate
})(ChangePasswordForm);

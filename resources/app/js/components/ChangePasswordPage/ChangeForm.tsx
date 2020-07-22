import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';


export type IChangeFormData = {
	password: string,
	password_confirmation: string
}

type IOwnProps = {
	changeData: {
		error: string | null,
		isLoading: boolean
	}
}

type IChangeProps = InjectedFormProps<IChangeFormData, IOwnProps> & IOwnProps;

const ChangeForm: React.FC<IChangeProps> = (props) => (
	<div className="container">
		<form onSubmit={props.handleSubmit} className="login my-pad">
			<div className="login__head">Change password</div>

			{
				props.changeData.error &&
				<div className="red">{props.changeData.error}</div>
			}

			<Field component={InputElement} type="password" name="password"
				   placeholder="Password" required/>
			<Field component={InputElement} type="password" name="password_confirmation"
				   placeholder="Password confirmation" required/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">
					{props.changeData.isLoading ? 'Loading...' : 'Change'}
				</button>
			</div>
		</form>
	</div>
);

export default reduxForm<IChangeFormData, IOwnProps>({
	form: 'change'
})(ChangeForm);

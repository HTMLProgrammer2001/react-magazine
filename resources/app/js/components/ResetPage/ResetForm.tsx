import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';
import {ResetState} from '../../redux/Reducers/reset';


export type IResetFormData = {
	email: string
}

type IOwnProps = {
	resetState: ResetState
}

type IResetProps = InjectedFormProps<IResetFormData, IOwnProps> & IOwnProps;

const ResetForm: React.FC<IResetProps> = (props) => (
	<form className="reset" onSubmit={props.handleSubmit}>
		<div className="container my-pad">
			<div className="login__head">Reset password</div>

			{props.resetState.error && <div className="red">{props.error}</div> }
			{props.resetState.message && <div>{props.resetState.message}</div>}

			<Field component={InputElement} type="email" name="email"
				   placeholder="Email" required/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">
					{props.resetState.isLoading ? 'Loading...' : 'Reset'}
				</button>
			</div>
		</div>
	</form>
);

export default reduxForm<IResetFormData, IOwnProps>({
	form: 'reset'
})(ResetForm);

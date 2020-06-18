import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../FormElements/InputElement';


type IResetProps = InjectedFormProps<{}, {}>;

const ResetForm: React.FC<IResetProps> = (props) => (
	<form className="reset" onSubmit={props.handleSubmit}>
		<div className="container my-pad">
			<div className="login__head">Reset password</div>

			<Field component={InputElement} type="email" name="email"
				   placeholder="Email" required/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">Reset</button>
			</div>
		</div>
	</form>
);

export default reduxForm({
	form: 'reset'
})(ResetForm);

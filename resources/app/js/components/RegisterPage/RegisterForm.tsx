import * as React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';

import InputElement from '../FormElements/InputElement';
import {RootState} from '../../redux/Reducers';
import thunkRegisterCreator, {RegisterThunkAction} from '../../redux/ThunkActions/register';


const mapStateToProps = (state: RootState) => ({
	formData: state.register
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, RegisterThunkAction>) => ({
	register: (vals: IRegisterFormData) => {
		dispatch(thunkRegisterCreator(vals));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

export type IRegisterFormData = {
	fullName: string,
	email: string,
	password: string,
	confirmPassword: string
}

type IRegisterProps = InjectedFormProps<IRegisterFormData, ConnectedProps<typeof connected>>
		& ConnectedProps<typeof connected>;

const RegisterForm: React.FC<IRegisterProps> = (props) => (
	<div className="container">
		<form onSubmit={props.handleSubmit} className="login my-pad" noValidate>
			<div className="login__head">Sign in</div>

			<Field component={InputElement} type="text" name="fullName"
				   placeholder="Full name" required/>
			<Field component={InputElement} type="text" name="email"
				   placeholder="Email" required/>
			<Field component={InputElement} type="password" name="password"
				   placeholder="Password" required/>
			<Field component={InputElement} type="password" name="confirmPassword"
				   placeholder="Confirm password" required/>

			<div className="row space-between my-pad w-100">
				<div/>
				<button type="submit" className="check__but">Sign in</button>
			</div>
		</form>
	</div>
);

export default reduxForm<IRegisterFormData, ConnectedProps<typeof connected>>({
	form: 'register'
})(RegisterForm);


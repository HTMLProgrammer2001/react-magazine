import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import {default as RegisterForm, IRegisterFormData} from './RegisterForm';
import {RootState} from '../../redux';
import thunkRegister from '../../redux/register/thunks';
import {selectRegisterState} from '../../redux/register/selectors';


const mapStateToProps = (state: RootState) => ({
	registration: selectRegisterState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	register: (vals: IRegisterFormData) => {
		dispatch(thunkRegister(vals, 'register'));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);


const RegisterPage: React.FC<ConnectedProps<typeof connected>> = (props) => {
	const submit = (values: IRegisterFormData) => {
		console.log(values);
		props.register(values);
	};

	React.useEffect(() => {
		document.title = 'Sign in';
	}, []);

	return (
		<React.Fragment>
			<Breadcrumbs
				paths={[{name: 'Home', path: '/'}, {name: 'Register', path: '/register'}]}
			/>

			{
				props.registration.message ?
					<div>{props.registration.message}</div> :
					null
			}

			<RegisterForm onSubmit={submit} registration={props.registration}/>
		</React.Fragment>
	);
};

export default connected(RegisterPage);

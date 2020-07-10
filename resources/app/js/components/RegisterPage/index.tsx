import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Paginate from '../Paginate';
import {RootState} from '../../redux/Reducers';
import {default as RegisterForm, IRegisterFormData} from './RegisterForm';
import thunkRegisterCreator, {RegisterThunkAction} from '../../redux/ThunkActions/thunkRegister';


const mapStateToProps = (state: RootState) => ({
	registration: state.register
});

const mapDispatchToProps = (dispatch: any) => ({
	register: (vals: IRegisterFormData) => {
		dispatch(thunkRegisterCreator(vals, 'register'));
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
			<Paginate paths={[{name: 'Home', path: '/'}, {name: 'Register', path: '/register'}]}/>

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

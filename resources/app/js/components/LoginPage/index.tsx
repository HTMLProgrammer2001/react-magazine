import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Paginate from '../Paginate';
import {default as LoginForm, ILoginFormData} from './LoginForm';
import {RootState} from '../../redux/Reducers';
import thunkLogin from '../../redux/ThunkActions/thunkLogin';


const mapStateToProps = (state: RootState) => ({
	loginData: state.login
});

const mapDispatchToProps = (dispatch: any) => ({
	login: (vals: ILoginFormData) => {
		dispatch(thunkLogin(vals, 'login'));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);


const LoginPage: React.FC<ConnectedProps<typeof connected>> = (props) => {
	const submit = (values: ILoginFormData) => {
		console.log(values);
		props.login(values);
	};

	React.useEffect(() => {
		document.title = 'Login';
	}, []);

	return (
		<React.Fragment>
			<Paginate paths={[{name: 'Home', path: '/'}, {name: 'Login', path: '/login'}]}/>
			<LoginForm onSubmit={submit} loginData={props.loginData}/>
		</React.Fragment>
	);
};

export default connected(LoginPage);

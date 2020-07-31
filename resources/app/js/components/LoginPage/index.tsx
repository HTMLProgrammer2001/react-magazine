import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import {default as LoginForm, ILoginFormData} from './LoginForm';
import {RootState} from '../../redux';
import thunkLogin from '../../redux/login/thunks';
import {selectLoginState} from '../../redux/login/selectors';


const mapStateToProps = (state: RootState) => ({
	loginData: selectLoginState(state)
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
			<Breadcrumbs paths={[{name: 'Home', path: '/'}, {name: 'Login', path: '/login'}]}/>
			<LoginForm onSubmit={submit} loginData={props.loginData}/>
		</React.Fragment>
	);
};

export default connected(LoginPage);

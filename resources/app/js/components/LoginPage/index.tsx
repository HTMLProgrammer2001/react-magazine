import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import {default as LoginForm, ILoginFormData} from './LoginForm';
import thunkLogin from '../../redux/login/thunks';
import IsAuthenticated from '../../HOC/IsAuthenticated';
import {RootState} from '../../redux';


const mapStateToProps = (state: RootState) => ({
	loginState: state.login
});

const mapDispatchToProps = (dispatch: any) => ({
	login: (vals: ILoginFormData) => {
		dispatch(thunkLogin(vals, 'login'));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);


type ILooginProps = ConnectedProps<typeof connected>;

const LoginPage: React.FC<ConnectedProps<typeof connected>> = (props) => {
	const submit = (values: ILoginFormData) => {
		props.login(values);
	};

	React.useEffect(() => {
		document.title = 'Login';
	}, []);

	return (
		<React.Fragment>
			<Breadcrumbs paths={[{name: 'Home', path: '/'}, {name: 'Login', path: '/login'}]}/>
			<LoginForm onSubmit={submit} loginState={props.loginState}/>
		</React.Fragment>
	);
};

export default IsAuthenticated(false)<ILooginProps>(connected(LoginPage));

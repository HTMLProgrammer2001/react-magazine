import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import {default as RegisterForm, IRegisterFormData} from './RegisterForm';
import thunkRegister from '../../redux/register/thunks';
import IsAuthenticated from '../../HOC/IsAuthenticated';


const mapDispatchToProps = (dispatch: any) => ({
	register: (vals: IRegisterFormData) => {
		dispatch(thunkRegister(vals, 'register'));
	}
});

const connected = connect(null, mapDispatchToProps);


type IRegisterProps = ConnectedProps<typeof connected>;

const RegisterPage: React.FC<IRegisterProps> = (props) => {
	const submit = (values: IRegisterFormData) => {
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

			<RegisterForm onSubmit={submit}/>
		</React.Fragment>
	);
};

export default IsAuthenticated(false)<IRegisterProps>(connected(RegisterPage));

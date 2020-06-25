import * as React from 'react';

import Paginate from '../Paginate';
import {default as RegisterForm, IRegisterFormData} from './RegisterForm';


const RegisterPage: React.FC<{}> = () => {
	const submit = (values: IRegisterFormData) => {
		console.log(values);
	};

	React.useEffect(() => {
		document.title = 'Sign in';
	}, []);

	return (
		<React.Fragment>
			<Paginate paths={[{name: 'Home', path: '/'}, {name: 'Register', path: '/register'}]}/>
			<RegisterForm onSubmit={submit}/>
		</React.Fragment>
	);
};

export default RegisterPage;

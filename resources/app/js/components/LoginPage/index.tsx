import * as React from 'react';

import Paginate from '../Paginate';
import {default as LoginForm, ILoginFormData} from './LoginForm';


const LoginPage: React.FC<{}> = () => {
	const submit = (values: ILoginFormData) => {
		console.log(values);
	};

	React.useEffect(() => {
		document.title = 'Login';
	}, []);

	return (
		<React.Fragment>
			<Paginate paths={[{name: 'Home', path: '/'}, {name: 'Login', path: '/login'}]}/>
			<LoginForm onSubmit={submit}/>
		</React.Fragment>
	);
};

export default LoginPage;

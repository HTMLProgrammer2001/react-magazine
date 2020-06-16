import * as React from 'react';

import Paginate from '../Paginate';
import RegisterForm from './RegisterForm';


const RegisterPage: React.FC<{}> = () => {
	const submit = (values: any) => {
		console.log(values);
	};

	return (
		<React.Fragment>
			<Paginate paths={[{name: 'Home', path: '/'}, {name: 'Register', path: '/register'}]}/>
			<RegisterForm onSubmit={submit}/>
		</React.Fragment>
	);
};

export default RegisterPage;

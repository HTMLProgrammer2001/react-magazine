import * as React from 'react';

import Paginate from '../Paginate';


const LoginPage: React.FC<{}> = () => (
	<Paginate paths={[{name: 'Home', path: '/'}, {name: 'Login', path: '/login'}]}/>
);

export default LoginPage;

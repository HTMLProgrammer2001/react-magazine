import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LoginPage from './LoginPage/';
import RegisterPage from './RegisterPage/';
import NotFoundPage from './NotFoundPage/';
import HomePage from './HomePage/';
import CartPage from './CartPage/';
import ResetPage from './ResetPage/';


const Content: React.FC<{}> = () => (
	<Router>
		<Switch>
			<Route path='/' exact component={HomePage}/>
			<Route path='/login' exact component={LoginPage}/>
			<Route path='/register' exact component={RegisterPage}/>
			<Route path='/cart' exact component={CartPage}/>
			<Route path='/reset' exact component={ResetPage}/>
			<Route path='/' component={NotFoundPage}/>
		</Switch>
	</Router>
);

export default Content;

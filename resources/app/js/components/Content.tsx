import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LoginPage from './LoginPage/';
import RegisterPage from './RegisterPage/';
import NotFoundPage from './NotFoundPage/';


const Content: React.FC<{}> = () => (
	<Router>
		<Switch>
			<Route path='/' exact render={() => <div>Пусто</div>}/>
			<Route path='/login' exact component={LoginPage}/>
			<Route path='/register' exact component={RegisterPage}/>
			<Route path='/' component={NotFoundPage}/>
		</Switch>
	</Router>
);

export default Content;

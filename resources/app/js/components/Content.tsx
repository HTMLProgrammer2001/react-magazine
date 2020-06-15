import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LoginPage from './LoginPage/';


const Content: React.FC<{}> = () => (
	<Router>
		<Switch>
			<Route to='/login' exact component={LoginPage}/>
		</Switch>
	</Router>
);

export default Content;

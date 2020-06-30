import * as React from 'react';
import {Switch, Route} from 'react-router-dom';


const Routing: React.FC<{}> = () => (
	<Switch>
		<Route path="/admin" component={}/>
		<Route path="/profile" component={}/>
		<Route path="/" component={}/>
	</Switch>
);

export default Routing;

import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import Content from './Content';
import ProfileSwitcher from './Profile';
import {RootState} from '../redux/Reducers';
import thunkInitialize from '../redux/ThunkActions/App/thunkInitialize';


const mapStateToProps = (state: RootState) => ({
	initialized: state.app.initialized
});

const connected = connect(mapStateToProps, {
	initialize: thunkInitialize
});

const App: React.FC<ConnectedProps<typeof connected>> = (props) => {
	React.useEffect(() => {
		if(!props.initialized)
			props.initialize();
	}, []);

	if(!props.initialized)
		return <div>Loading...</div>;

	return (
		<Router>
			<Switch>
				<Route path='/profile' component={ProfileSwitcher}/>
				<Route path='/' component={Content}/>
			</Switch>
		</Router>
	);
};

export default connected(App);

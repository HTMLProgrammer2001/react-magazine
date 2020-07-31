import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import Content from './Content';
import ProfileSwitcher from './Profile';
import {RootState} from '../redux';
import thunkInitialize from '../redux/AppState/app/thunks';
import {selectInitialized} from '../redux/AppState/app/selectors';


const mapStateToProps = (state: RootState) => ({
	initialized: selectInitialized(state)
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

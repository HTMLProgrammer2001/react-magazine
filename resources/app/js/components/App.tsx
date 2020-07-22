import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import Header from './Header/';
import Footer from './Footer';
import Content from './Content';
import Newsletter from './Newsletter';
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
			<Header/>
			<Content/>
			<Newsletter/>
			<Footer/>
		</Router>
	);
};

export default connected(App);

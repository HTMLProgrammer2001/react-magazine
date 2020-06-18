import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Header/';
import Footer from './Footer';
import Content from './Content';
import Newsletter from './Newsletter';


const App: React.FC<{}> = () => (
	<Router>
		<Header/>
		<Content/>
		<Newsletter/>
		<Footer/>
	</Router>
);

export default App;

import * as React from 'react';

import Header from './Header/';
import Footer from './Footer';
import Content from './Content';
import Newsletter from './Newsletter';


const App: React.FC<{}> = () => (
	<React.Fragment>
		<Header/>
		<Content/>
		<Newsletter/>
		<Footer/>
	</React.Fragment>
);

export default App;

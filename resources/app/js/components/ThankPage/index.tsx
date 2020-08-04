import * as React from 'react';
import Breadcrumbs from '../Breadcrumbs';


const ThankPage: React.FC<{}> = () => (
	<React.Fragment>
		<Breadcrumbs
			paths={[{name: 'Home', path: '/'}, {name: 'Thank', path: '/thank'}]}
		/>

		<div className="error">
			<img className="error__img" src="/image/thank.jpg" alt="Not found"/>
		</div>
	</React.Fragment>
);

export default ThankPage;

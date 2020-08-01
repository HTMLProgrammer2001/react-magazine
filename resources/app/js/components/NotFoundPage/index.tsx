import * as React from 'react';

import Breadcrumbs from '../Breadcrumbs';
import NotFoundImg from './NotFoundImg';


const NotFoundPage: React.FC<{}> = () => {
	React.useEffect(() => {
		document.title = '404 | Not found';
	}, []);

	return (
		<React.Fragment>
			<Breadcrumbs paths={[{name: 'Home', path: '/'}, {name: 'Not found', path: '/404'}]}/>

			<NotFoundImg/>
		</React.Fragment>
	);
};

export default NotFoundPage;

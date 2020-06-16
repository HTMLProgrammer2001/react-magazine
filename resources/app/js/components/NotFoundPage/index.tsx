import * as React from 'react';

import Paginate from '../Paginate';


const NotFoundPage: React.FC<{}> = () => {
	React.useEffect(() => {
		document.title = '404 | Not found';
	}, []);

	return (
		<React.Fragment>
			<Paginate paths={[{name: 'Home', path: '/'}, {name: 'Not found', path: '/404'}]}/>

			<div className="error">
				<img className="error__img" src="/image/not-found.png" alt="Not found"/>
			</div>
		</React.Fragment>
	);
};

export default NotFoundPage;

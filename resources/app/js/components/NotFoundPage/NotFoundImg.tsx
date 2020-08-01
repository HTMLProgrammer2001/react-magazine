import * as React from 'react';


const NotFoundImg: React.FC<{}> = () => (
	<div className="error">
		<img className="error__img" src="/image/not-found.png" alt="Not found"/>
	</div>
);

export default NotFoundImg;

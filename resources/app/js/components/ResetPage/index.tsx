import * as React from 'react';

import Paginate from '../Paginate';
import {default as ResetForm, IResetFormData} from './ResetForm';


const ResetPage: React.FC<{}> = () => {
	React.useEffect(() => {
		document.title = 'Reset password';
	}, []);

	let onSubmit = (vals: IResetFormData) => {
		console.log(vals);
	};

	return (
		<React.Fragment>
			<Paginate paths={[
				{name: 'Home', path: '/'},
				{name: 'Reset password', path: '/reset'}
			]}/>

			<ResetForm onSubmit={onSubmit}/>
		</React.Fragment>
	);
};

export default ResetPage;

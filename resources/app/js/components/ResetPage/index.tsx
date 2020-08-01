import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import {default as ResetForm, IResetFormData} from './ResetForm';
import thunkReset from '../../redux/reset/thunks/resetRequest';
import IsAuthenticated from '../../HOC/IsAuthenticated';


const mapDispatchToProps = (dispatch: any) => ({
	reset: (vals: IResetFormData) => {
		dispatch(thunkReset(vals, 'reset'));
	}
});

const connected = connect(null, mapDispatchToProps);


type IResetProps = ConnectedProps<typeof connected>;

const ResetPage: React.FC<IResetProps> = (props) => {
	React.useEffect(() => {
		document.title = 'Reset password';
	}, []);

	let onSubmit = (vals: IResetFormData) => {
		props.reset(vals);
	};

	return (
		<React.Fragment>
			<Breadcrumbs paths={[
				{name: 'Home', path: '/'},
				{name: 'Reset password', path: '/reset'}
			]}/>

			<ResetForm onSubmit={onSubmit}/>
		</React.Fragment>
	);
};

export default IsAuthenticated(false)<IResetProps>(connected(ResetPage));

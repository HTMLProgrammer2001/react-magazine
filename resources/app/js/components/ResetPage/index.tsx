import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Breadcrumbs from '../Breadcrumbs';
import {default as ResetForm, IResetFormData} from './ResetForm';
import {RootState} from '../../redux';
import thunkReset from '../../redux/reset/thunks';
import {selectResetState} from '../../redux/reset/selectors';


const mapStateToProps = (state: RootState) => ({
	resetState: selectResetState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	reset: (vals: IResetFormData) => {
		dispatch(thunkReset(vals, 'reset'));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);


const ResetPage: React.FC<ConnectedProps<typeof connected>> = (props) => {
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

			<ResetForm
				onSubmit={onSubmit}
				resetState={props.resetState}
			/>
		</React.Fragment>
	);
};

export default connected(ResetPage);


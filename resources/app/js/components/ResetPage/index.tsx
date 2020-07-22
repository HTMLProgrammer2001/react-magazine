import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import Paginate from '../Paginate';
import {default as ResetForm, IResetFormData} from './ResetForm';
import {RootState} from '../../redux/Reducers';
import thunkReset from '../../redux/ThunkActions/thunkReset';


const mapStateToProps = (state: RootState) => ({
	resetState: state.reset
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
			<Paginate paths={[
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


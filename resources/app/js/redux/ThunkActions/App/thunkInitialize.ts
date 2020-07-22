import {ThunkAction} from 'redux-thunk';

import {RootState} from '../../Reducers';
import {initialize} from '../../Actions/appActions';
import thunkFilters from './thunkFilters';
import thunkUser from './thunkUser';


export type InitializeThunkAction = ThunkAction<void, RootState, unknown, any>;

const thunkInitialize = (): InitializeThunkAction =>
	async (dispatch: any) => {
		let filters = dispatch(thunkFilters()),
			user = dispatch(thunkUser());

		Promise.all([filters, user])
			.then(() => {
				dispatch(initialize());
			});
	};

export default thunkInitialize;

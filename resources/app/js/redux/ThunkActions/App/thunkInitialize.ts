import {ThunkAction} from 'redux-thunk';

import {RootState} from '../../Reducers';
import {initialize} from '../../Actions/appActions';
import thunkFilters from './thunkFilters';
import thunkUser from './thunkUser';
import thunkCart from './thunkCart';


export type InitializeThunkAction = ThunkAction<void, RootState, unknown, any>;

const thunkInitialize = (): InitializeThunkAction =>
	async (dispatch: any) => {
		let filters = dispatch(thunkFilters()),
			user = dispatch(thunkUser()),
			cart = dispatch(thunkCart());

		Promise.all([filters, user, cart])
			.then(() => {
				dispatch(initialize());
			});
	};

export default thunkInitialize;

import {ThunkAction} from 'redux-thunk';

import {RootState} from '../../index';
import {initialize} from './actions';
import thunkFilters from '../../ThunkActions/App/thunkFilters';
import thunkUser from '../../ThunkActions/App/thunkUser';
import thunkCart from '../../ThunkActions/App/thunkCart';


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

import {ThunkAction} from 'redux-thunk';

import {RootState} from '../../index';
import {initialize} from './actions';
import thunkUser from '../user/thunks';
import thunkCart from '../cart/thunks';
import thunkFilters from '../filter/thunks';


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

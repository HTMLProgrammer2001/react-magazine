import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {categoryLoadStart, categoryLoadFailure, categoryLoadSuccess} from './actions';
import {dataApi} from '../../Helpers/API/frontAPI';

import {RootState} from '../';
import {CategoryActions} from './reducer';
import {toast} from 'react-toastify';


export type CategoryThunkAction = ThunkAction<void, RootState, unknown, CategoryActions>;

const thunkCategory = (): CategoryThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, CategoryActions>) => {
		//Start loading
		dispatch(categoryLoadStart());

		try {
			//Request
			const categoryResponse = await dataApi.getCategories();

			//Load categories
			dispatch(categoryLoadSuccess(categoryResponse.data));
		}
		catch (e) {
			//Error
			dispatch(categoryLoadFailure(e.message));
			toast.error('Error in loading categories');
		}
	};

export default thunkCategory;

import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {categoryLoadStart, categoryLoadFailure, categoryLoadSuccess} from './actions';
import {dataApi} from '../../Helpers/API';

import {RootState} from '../';
import {CategoryActions} from './reducer';


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
			dispatch(categoryLoadFailure(e.data.message));
		}
	};

export default thunkCategory;

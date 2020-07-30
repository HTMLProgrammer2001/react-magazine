import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {categoryLoadStart, categoryLoadFailure, categoryLoadSuccess} from './actions';
import API from '../../Helpers/API';

import {RootState} from '../';
import {CategoryActions} from './reducer';


export type CategoryThunkAction = ThunkAction<void, RootState, unknown, CategoryActions>;

const thunkCategory = (): CategoryThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, CategoryActions>) => {
		dispatch(categoryLoadStart());

		const categoryResponse = await API.getCategories();

		if(API.isError(categoryResponse)){
			dispatch(categoryLoadFailure(categoryResponse.message));
		}
		else{
			dispatch(categoryLoadSuccess(categoryResponse));
		}
	};

export default thunkCategory;

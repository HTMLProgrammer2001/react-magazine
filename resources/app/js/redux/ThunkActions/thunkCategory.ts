import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../Reducers';
import {CategoryActions} from '../Reducers/category';
import {
	categoryLoadFailure,
	categoryLoadStart,
	categoryLoadSuccess
} from '../Actions/categoryActions';
import API from '../../Helpers/API';


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

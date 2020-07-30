import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../index';
import {FilterActions} from './reducer';
import {filterStart, filterError, filterSuccess} from './actions';

import API from '../../../Helpers/API';


export type FilterThunkAction = ThunkAction<void, RootState, unknown, FilterActions>;

const thunkFilter = (): FilterThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, FilterActions>) => {
		dispatch(filterStart());

		const filterResponse = await API.getFilters();

		if(API.isError(filterResponse)){
			dispatch(filterError(filterResponse.message));
		}
		else{
			dispatch(filterSuccess(filterResponse));
		}
	};

export default thunkFilter;

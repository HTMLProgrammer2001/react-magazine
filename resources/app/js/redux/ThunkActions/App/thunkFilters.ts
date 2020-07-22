import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../Reducers';
import {FilterActions} from '../../Reducers/App/filter';
import {
	filterError,
	filterStart,
	filterSuccess
} from '../../Actions/App/filterActions';
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

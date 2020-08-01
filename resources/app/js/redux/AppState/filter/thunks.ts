import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../index';
import {FilterActions} from './reducer';
import {filterStart, filterError, filterSuccess} from './actions';

import {dataApi} from '../../../Helpers/API';


export type FilterThunkAction = ThunkAction<void, RootState, unknown, FilterActions>;

const thunkFilter = (): FilterThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, FilterActions>) => {
		//Start loading
		dispatch(filterStart());

		try{
			//Send request
			const filterResponse = await dataApi.getFilters();

			//Success load
			dispatch(filterSuccess(filterResponse.data));
		}
		catch (e) {
			//Error
			dispatch(filterError(e.message));
		}
	};

export default thunkFilter;

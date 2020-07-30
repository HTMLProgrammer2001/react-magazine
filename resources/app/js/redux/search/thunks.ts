import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../';
import {SearchActions} from './reducer';
import {
	searchError,
	searchStart,
	searchSuccess
} from './actions';
import API from '../../Helpers/API';


export type SearchThunkAction = ThunkAction<void, RootState, unknown, SearchActions>;

const thunkSearch = (text: string, page: number = 1): SearchThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, SearchActions>) => {
		dispatch(searchStart(text));

		const searchResponse = await API.search(text, page);

		if(API.isError(searchResponse)){
			dispatch(searchError(searchResponse.message));
		}
		else{
			dispatch(searchSuccess(searchResponse));
		}
	};

export default thunkSearch;

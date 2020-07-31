import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../';
import {SearchActions} from './reducer';
import {
	searchError,
	searchStart,
	searchSuccess
} from './actions';
import {dataApi} from '../../Helpers/API';


export type SearchThunkAction = ThunkAction<void, RootState, unknown, SearchActions>;

const thunkSearch = (text: string, page: number = 1): SearchThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, SearchActions>) => {
		dispatch(searchStart(text));

		try{
			const searchResponse = await dataApi.search(text, page);

			dispatch(searchSuccess(searchResponse.data));
		}
		catch (e) {
			dispatch(searchError(e.data.message));
		}
	};

export default thunkSearch;

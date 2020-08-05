import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {formValueSelector} from 'redux-form';

import {FavoriteActions} from '../reducer';

import {favoriteStart, favoriteError, favoriteSuccess} from '../actions';
import {profileAPI} from '../../../../Helpers/API/ProfileAPI';
import {RootState} from '../../../index';
import {toast} from 'react-toastify';
import {selectFavoriteSize} from '../selectors';


export type FavoriteThunkAction = ThunkAction<void, RootState, unknown, FavoriteActions>;

const thunkFavorite = (offset: number = 1): FavoriteThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, FavoriteActions>, getState) => {
		dispatch(favoriteStart());

		const selector = formValueSelector('favoriteFind');
		const find = selector(getState(), 'find');
		const size = selectFavoriteSize(getState());

		try{
			const favoriteResponse = await profileAPI.getFavorite(offset, size, find);

			dispatch(favoriteSuccess(favoriteResponse.data));
		}
		catch (e) {
			dispatch(favoriteError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};

export default thunkFavorite;

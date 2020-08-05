import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {FavoriteActions} from '../reducer';

import {profileAPI} from '../../../../Helpers/API/ProfileAPI';
import {RootState} from '../../../index';
import {toast} from 'react-toastify';
import {favoriteDelete} from '../actions';


export type FavoriteThunkAction = ThunkAction<void, RootState, unknown, FavoriteActions>;

const thunkDeleteFav = (id: number): FavoriteThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, FavoriteActions>, getState) => {
		try{
			const favoriteResponse = await profileAPI.deleteFavorite(id);

			dispatch(favoriteDelete(id));
			toast.success(favoriteResponse.data.success);
		}
		catch (e) {
			toast.error(e.response?.data.message || e.message);
		}
	};

export default thunkDeleteFav;

import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RecommendActions} from './reducer';
import {
	recommendError,
	recommendStart,
	recommendSuccess
} from './actions';
import {profileAPI} from '../../../Helpers/API/ProfileAPI';
import {RootState} from '../../';
import {toast} from 'react-toastify';


export type RecommendThunkAction = ThunkAction<void, RootState, unknown, RecommendActions>;

const thunkRecommend = (): RecommendThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, RecommendActions>) => {
		dispatch(recommendStart());

		try{
			const recommendResponse = await profileAPI.getProducts();

			dispatch(recommendSuccess(recommendResponse.data));
		}
		catch (e) {
			dispatch(recommendError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};

export default thunkRecommend;

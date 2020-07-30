import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../../';
import {productLikeChange} from '../actions';
import API from '../../../../Helpers/API';


type LikeAction = ReturnType<typeof productLikeChange>;
export type ToggleLikeThunkAction = ThunkAction<void, RootState, unknown, LikeAction>;

const thunkToggleLike = (productID: number): ToggleLikeThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, LikeAction>) => {
		let likeResponse = await API.changeLike(productID);

		if(!API.isError(likeResponse)){
			dispatch(productLikeChange(likeResponse.message));
		}
	};

export default thunkToggleLike;

import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../../';
import {productLikeChange} from '../actions';
import {dataApi} from '../../../../Helpers/API';


type LikeAction = ReturnType<typeof productLikeChange>;
export type ToggleLikeThunkAction = ThunkAction<void, RootState, unknown, LikeAction>;

const thunkToggleLike = (productID: number): ToggleLikeThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, LikeAction>) => {
		try{
			const toggleResponse = await dataApi.changeLike(productID);
			dispatch(productLikeChange(toggleResponse.data.message));
		}
		catch (e) {
			console.log(e);
		}
	};

export default thunkToggleLike;

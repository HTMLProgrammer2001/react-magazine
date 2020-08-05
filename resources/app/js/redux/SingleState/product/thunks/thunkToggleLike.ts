import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../../';
import {productLikeChange} from '../actions';
import {dataApi} from '../../../../Helpers/API/frontAPI';
import {toast} from 'react-toastify';


type LikeAction = ReturnType<typeof productLikeChange>;
export type ToggleLikeThunkAction = ThunkAction<void, RootState, unknown, LikeAction>;

const thunkToggleLike = (productID: number): ToggleLikeThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, LikeAction>) => {
		try{
			const toggleResponse = await dataApi.changeLike(productID);

			dispatch(productLikeChange(toggleResponse.data.success));

			if(toggleResponse.data.success) {
				toast.success('This product was added to your favorite list');
			}
			else {
				toast.success('This product was deleted from your favorite list');
			}
		}
		catch (e) {
			toast.error(e.response?.data.message || e.message);
		}
	};

export default thunkToggleLike;

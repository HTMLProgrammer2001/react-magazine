import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';

import {RootState} from '../../index';
import {SingleOrderActions} from './reducer';
import {
	singleOrderError,
	singleOrderNotFound,
	singleOrderStart,
	singleOrderSuccess
} from './actions';
import {profileAPI} from '../../../Helpers/API/ProfileAPI';


export type SingleOrderThunkAction = ThunkAction<void, RootState, unknown, SingleOrderActions>;

const thunkSingleOrder = (id: number): SingleOrderThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, SingleOrderActions>) => {
		dispatch(singleOrderStart());

		try{
			const singleOrderResponse = await profileAPI.getOrder(id);

			dispatch(singleOrderSuccess(singleOrderResponse.data));
		}
		catch (e) {
			if(e.response?.status == 404 || e.status == 404){
				dispatch(singleOrderNotFound());
			}

			dispatch(singleOrderError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};

export default thunkSingleOrder;

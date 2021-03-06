import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../';
import {VerifyActions} from './reducer';
import {verifyStart, verifyError, verifySuccess, verifyNotFound} from './actions';
import {userApi} from '../../Helpers/API/frontAPI';
import {toast} from 'react-toastify';


export type RegisterThunkAction = ThunkAction<void, RootState, unknown, VerifyActions>;

const thunkVerify = (id: string): RegisterThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, VerifyActions>) => {
		dispatch(verifyStart());

		try{
			const verifyResponse = await userApi.verifyUser(id);

			dispatch(verifySuccess(verifyResponse.data.success));
			toast.success('Account verified');
		}
		catch (e) {
			if(e.response.status == 404) {
				dispatch(verifyNotFound());
				toast.error('Not found');
			}
			else {
				dispatch(verifyError(e.message || e.data.response!.data.message));
				toast.error('Error in verify');
			}
		}
	};

export default thunkVerify;

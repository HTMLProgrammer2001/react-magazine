import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../';
import {VerifyActions} from './reducer';
import {verifyStart, verifyError, verifySuccess} from './actions';
import {userApi} from '../../Helpers/API';


export type RegisterThunkAction = ThunkAction<void, RootState, unknown, VerifyActions>;

const thunkVerify = (id: string): RegisterThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, VerifyActions>) => {
		dispatch(verifyStart());

		try{
			const verifyResponse = await userApi.verifyUser(id);

			dispatch(verifySuccess(verifyResponse.data.success));
		}
		catch (e) {
			dispatch(verifyError(e.data.message || e.data.response!.data.message));
		}
	};

export default thunkVerify;

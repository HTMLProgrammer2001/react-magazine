import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../';
import {VerifyActions} from './reducer';
import {verifyStart, verifyError, verifySuccess} from './actions';
import API from '../../Helpers/API';


export type RegisterThunkAction = ThunkAction<void, RootState, unknown, VerifyActions>;

const thunkVerify = (id: string): RegisterThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, VerifyActions>) => {
		dispatch(verifyStart());

		const verifyResponse = await API.verifyUser(id);

		console.log(verifyResponse);

		if(API.isError(verifyResponse)){
			dispatch(verifyError(verifyResponse.response!.data.message));
		}
		else{
			dispatch(verifySuccess(verifyResponse.success));
		}
	};

export default thunkVerify;

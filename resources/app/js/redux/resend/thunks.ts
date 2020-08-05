import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {reset, FormAction, startSubmit, stopSubmit} from 'redux-form';

import {IResendFormData} from '../../components/ResendPage/ResendForm';
import {RootState} from '../';
import {isError, userApi} from '../../Helpers/API/frontAPI';
import {toast} from 'react-toastify';


export type ResendThunkAction = ThunkAction<void, RootState, unknown, FormAction>;

const thunkResend = (vals: IResendFormData, formName: string): ResendThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, FormAction>) => {
		dispatch(startSubmit(formName));

		try{
			const resendResponse = await userApi.resendEmail(vals);

			if(isError(resendResponse.data)){
				dispatch(stopSubmit(formName, {_error: resendResponse.data.message}));

				toast.error('Error in resend');
			}
			else{
				dispatch(reset(formName));
				toast.success(resendResponse.data.success);
			}
		}
		catch (e) {
			console.dir(e);

			//Error
			dispatch(stopSubmit(formName, {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error('Error in resend');
		}
	};

export default thunkResend;

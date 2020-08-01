import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {reset, FormAction, startSubmit, stopSubmit} from 'redux-form';

import {IResetFormData} from '../../../components/ResetPage/ResetForm';
import {RootState} from '../../index';
import {userApi} from '../../../Helpers/API';
import {toast} from 'react-toastify';


export type ResetThunkAction = ThunkAction<void, RootState, unknown, FormAction>;

const thunkReset = (vals: IResetFormData, formName: string): ResetThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, FormAction>) => {
		dispatch(startSubmit(formName));

		try{
			const resetResponse = await userApi.resetUser(vals);

			dispatch(reset(formName));
			toast.success(resetResponse.data.success);
		}
		catch (e) {
			console.dir(e);

			//Error
			dispatch(stopSubmit(formName, {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error('Error in reset');
		}
	};

export default thunkReset;

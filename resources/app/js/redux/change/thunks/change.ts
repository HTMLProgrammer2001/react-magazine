import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {reset, startSubmit, stopSubmit} from 'redux-form';

import {IChangeFormData} from '../../../components/ChangePasswordPage/ChangeForm';
import {RootState} from '../../index';
import {ChangeActions} from '../reducer';

import {userApi} from '../../../Helpers/API/frontAPI';
import {toast} from 'react-toastify';


export type ChangeThunkAction = ThunkAction<void, RootState, unknown, ChangeActions>;

const thunkChange = (id: string, vals: IChangeFormData, formName: string): ChangeThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ChangeActions>) => {
		//Start changing
		dispatch(startSubmit(formName));

		try{
			//Request
			await userApi.changePassword(id, vals);

			//Reset form and success message
			dispatch(reset(formName));
			dispatch(stopSubmit(formName));

			toast.success('Password was changed successfully');
		}
		catch (e) {
			//Has errors
			dispatch(stopSubmit(formName, {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error('Error in password change');
		}
	};

export default thunkChange;

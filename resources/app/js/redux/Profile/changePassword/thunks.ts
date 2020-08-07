import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {FormAction, reset, startSubmit, stopSubmit} from 'redux-form';

import {RootState} from '../../index';

import {profileAPI} from '../../../Helpers/API/ProfileAPI';
import {toast} from 'react-toastify';
import {IChangePasswordData} from '../../../components/Profile/SettingsPage/ChangePasswordForm';

type ChangeActions = FormAction;
export type ProfileChangeThunkAction = ThunkAction<void, RootState, unknown, ChangeActions>;

const thunkProfilePasswordChange = (vals: IChangePasswordData, formName: string):
	ProfileChangeThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ChangeActions>) => {
		//Start changing
		dispatch(startSubmit(formName));

		try{
			//Request
			await profileAPI.changePassword(vals);

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

export default thunkProfilePasswordChange;

import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {FormAction, reset, startSubmit, stopSubmit} from 'redux-form';

import {RootState} from '../../index';

import {profileAPI} from '../../../Helpers/API/ProfileAPI';
import {toast} from 'react-toastify';
import {PersonalInfoFormData} from '../../../components/Profile/SettingsPage/PersonalInfoForm';
import {loadUserSuccessfull} from '../../AppState/user/actions';

type PersonalActions = FormAction;
export type ProfilePersonalThunkAction = ThunkAction<void, RootState, unknown, PersonalActions>;

const thunkProfilePersonal = (vals: PersonalInfoFormData, formName: string):
	ProfilePersonalThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, PersonalActions>) => {
		//Start changing
		dispatch(startSubmit(formName));

		try{
			//Request
			let {data} = await profileAPI.changePersonal(vals),
				token = <string>localStorage.getItem('token');

			//Reset form and success message
			dispatch(reset(formName));
			dispatch(stopSubmit(formName));
			dispatch(loadUserSuccessfull({...data, token}));

			toast.success('Personal info was changed');
		}
		catch (e) {
			//Has errors
			dispatch(stopSubmit(formName, {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error('Error in personal info change');
		}
	};

export default thunkProfilePersonal;

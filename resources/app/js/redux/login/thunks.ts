import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {FormAction, reset, startSubmit, stopSubmit} from 'redux-form';

import {ILoginFormData} from '../../components/LoginPage/LoginForm';
import {RootState} from '../';
import {userApi} from '../../Helpers/API';
import {loadUserSuccessfull} from '../AppState/user/actions';
import {toast} from 'react-toastify';
import {loginClear, loginResend, loginReset} from './actions';


type loadType = ReturnType<typeof loadUserSuccessfull>;
export type LoginThunkAction = ThunkAction<void, RootState, unknown, loadType | FormAction>;

const thunkLogin = (vals: ILoginFormData, formName: string): LoginThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, loadType | FormAction>) => {
		//Login start
		dispatch(startSubmit(formName));

		try {
			//Request
			const loginResponse = await userApi.loginUser(vals);

			//Update data
			dispatch(reset(formName));
			dispatch(loadUserSuccessfull(loginResponse.data));

			toast.success('You are successfully logged in');
		}
		catch (e) {
			if(e.response?.data.resend) {
				dispatch(loginResend());
			}
			else if(e.response?.data.reset) {
				dispatch(loginReset());
			}
			else {
				dispatch(loginClear());
			}

			//Error
			dispatch(stopSubmit(formName, {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error('Error in login');
		}
	};

export default thunkLogin;

import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {ILoginFormData} from '../../components/LoginPage/LoginForm';
import {RootState} from '../';
import {LoginActions} from './reducer';
import {loginSuccess, loginStart, loginError} from './actions';
import {userApi} from '../../Helpers/API';
import {loadUserSuccessfull} from '../AppState/user/actions';


export type LoginThunkAction = ThunkAction<void, RootState, unknown, LoginActions>;

const thunkLogin = (vals: ILoginFormData, formName: string): LoginThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, LoginActions |
		ReturnType<typeof loadUserSuccessfull>>) => {
		//Login start
		dispatch(loginStart());

		try {
			//Request
			const loginResponse = await userApi.loginUser(vals);

			//Update data
			dispatch(reset(formName));
			dispatch(loadUserSuccessfull(loginResponse.data));
			dispatch(loginSuccess());
		}
		catch (e) {
			//Error
			if(e.data.response!.data.errors){
				dispatch(updateSyncErrors(
					formName,
					e.data.response!.data.errors,
					e.data.response!.data.message
				));
			}

			dispatch(loginError(e.data.message));
		}
	};

export default thunkLogin;

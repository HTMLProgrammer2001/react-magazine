import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {ILoginFormData} from '../../components/LoginPage/LoginForm';
import {RootState} from '../';
import {LoginActions} from './reducer';
import {loginSuccess, loginStart, loginError} from './actions';
import API from '../../Helpers/API';
import {loadUserSuccessfull} from '../AppState/user/actions';


export type LoginThunkAction = ThunkAction<void, RootState, unknown, LoginActions>;

const thunkLogin = (vals: ILoginFormData, formName: string): LoginThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, LoginActions |
		ReturnType<typeof loadUserSuccessfull>>) => {
		dispatch(loginStart());

		const loginResponse = await API.loginUser(vals);

		console.log(loginResponse);

		if(API.isError(loginResponse)){
			if(loginResponse.response!.data.errors){
				dispatch(updateSyncErrors(
					formName,
					loginResponse.response!.data.errors,
					loginResponse.response!.data.message
				));
			}
			else{
				dispatch(loginError(loginResponse.response!.data.message));
			}
		}
		else{
			dispatch(reset(formName));
			dispatch(loadUserSuccessfull(loginResponse));
			dispatch(loginSuccess());
		}
	};

export default thunkLogin;

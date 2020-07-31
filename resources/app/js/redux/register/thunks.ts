import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IRegisterFormData} from '../../components/RegisterPage/RegisterForm';
import {RootState} from '../';
import {RegisterActions} from './reducer';
import {registerError, registerStart, registerSuccess} from './actions';
import {userApi} from '../../Helpers/API';


export type RegisterThunkAction = ThunkAction<void, RootState, unknown, RegisterActions>;

const thunkRegister = (vals: IRegisterFormData, formName: string): RegisterThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, RegisterActions>) => {
		dispatch(registerStart());

		try{
			const regResponse = await userApi.registerUser(vals);

			dispatch(reset(formName));
			dispatch(registerSuccess(regResponse.data.message));
		}
		catch (e) {
			if(e.data.response!.data.errors){
				dispatch(updateSyncErrors(
					formName,
					e.data.response!.data.errors,
					e.data.response!.data.message
				));
			}

			dispatch(registerError(e.data.message));
		}
	};

export default thunkRegister;

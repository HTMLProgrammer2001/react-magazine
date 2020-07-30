import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IRegisterFormData} from '../../components/RegisterPage/RegisterForm';
import {RootState} from '../';
import {RegisterActions} from './reducer';
import {registerError, registerStart, registerSuccess} from './actions';
import API from '../../Helpers/API';


export type RegisterThunkAction = ThunkAction<void, RootState, unknown, RegisterActions>;

const thunkRegister = (vals: IRegisterFormData, formName: string): RegisterThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, RegisterActions>) => {
		dispatch(registerStart());

		const regResponse = await API.registerUser(vals);

		console.log(regResponse);

		if(API.isError(regResponse)){
			if(regResponse.response!.data.errors){
				dispatch(updateSyncErrors(
					formName,
					regResponse.response!.data.errors,
					regResponse.response!.data.message
				));
			}
			else{
				dispatch(registerError(regResponse.response!.data.message));
			}
		}
		else{
			dispatch(reset(formName));
			dispatch(registerSuccess(regResponse.message));
		}
	};

export default thunkRegister;

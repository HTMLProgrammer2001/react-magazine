import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {reset, FormAction, startSubmit, stopSubmit} from 'redux-form';

import {IRegisterFormData} from '../../components/RegisterPage/RegisterForm';
import {RootState} from '../';
import {isError, userApi} from '../../Helpers/API';
import {toast} from 'react-toastify';


type IRegisterActions = FormAction;
export type RegisterThunkAction = ThunkAction<void, RootState, unknown, IRegisterActions>;

const thunkRegister = (vals: IRegisterFormData, formName: string): RegisterThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, IRegisterActions>) => {
		dispatch(startSubmit(formName));

		try{
			const regResponse = await userApi.registerUser(vals);

			if(isError(regResponse.data)){
				dispatch(stopSubmit(formName, {_error: regResponse.data.message}));
				toast.error('Error in registration');
			}
			else{
				dispatch(reset(formName));
				toast.success('You are registered!!! Check your email to verify account');
			}
		}
		catch (e) {
			console.dir(e);

			//Error
			dispatch(stopSubmit(formName, {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error('Error in register');
		}
	};

export default thunkRegister;

import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';

import {IRegisterFormData} from '../../components/RegisterPage/RegisterForm';
import {RootState} from '../Reducers';
import {registerError, registerStart, registerSuccess} from '../Actions/registerActions';
import API from '../../Helpers/API';


export type RegisterThunkAction = ThunkAction<void, RootState, unknown, Action<any>>;

const thunkRegister = (vals: IRegisterFormData): RegisterThunkAction => async dispatch => {
	dispatch(registerStart());

	const regResponse = await API.registerUser(vals);

	console.log(regResponse);

	if(API.isError(regResponse)){
		dispatch(registerError('Error'));
	}
	else{
		dispatch(regResponse.error ? regResponse.error : regResponse);
	}
};

export default thunkRegister;

import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IChangeFormData} from '../../components/ChangePasswordPage/ChangeForm';
import {RootState} from '../';
import {ChangeActions} from './reducer';

import {changeError, changeSuccess, changeStart} from './actions';
import {userApi} from '../../Helpers/API';


export type ChangeThunkAction = ThunkAction<void, RootState, unknown, ChangeActions>;

const thunkChange = (id: string, vals: IChangeFormData, formName: string): ChangeThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ChangeActions>) => {
		//Start changing
		dispatch(changeStart());

		try{
			//Request
			await userApi.changePassword(id, vals);

			//Reset form and success message
			dispatch(reset(formName));
			dispatch(changeSuccess());
		}
		catch (e) {
			if(e.data.response!.data.errors){
				//Has errors
				dispatch(updateSyncErrors(
					formName,
					e.data.response!.data.errors,
					e.data.response!.data.message
				));
			}

			dispatch(changeError(e.message));
		}
	};

export default thunkChange;

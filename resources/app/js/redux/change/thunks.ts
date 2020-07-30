import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IChangeFormData} from '../../components/ChangePasswordPage/ChangeForm';
import {RootState} from '../';
import {ChangeActions} from './reducer';

import {changeError, changeSuccess, changeStart} from './actions';
import API from '../../Helpers/API';


export type ChangeThunkAction = ThunkAction<void, RootState, unknown, ChangeActions>;

const thunkChange = (id: string, vals: IChangeFormData, formName: string): ChangeThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ChangeActions>) => {
		dispatch(changeStart());

		const changeResponse = await API.changePassword(id, vals);

		if(API.isError(changeResponse)){
			if(changeResponse.response!.data.errors){
				dispatch(updateSyncErrors(
					formName,
					changeResponse.response!.data.errors,
					changeResponse.response!.data.message
				));
			}

			dispatch(changeError(changeResponse.response!.data.message));
		}
		else{
			dispatch(reset(formName));
			dispatch(changeSuccess());
		}
	};

export default thunkChange;

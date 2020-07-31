import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IResetFormData} from '../../components/ResetPage/ResetForm';
import {RootState} from '../';
import {ResetActions} from './reducer';
import {resetError, resetStart, resetSuccess} from './actions';
import {userApi} from '../../Helpers/API';


export type ResetThunkAction = ThunkAction<void, RootState, unknown, ResetActions>;

const thunkReset = (vals: IResetFormData, formName: string): ResetThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ResetActions>) => {
		dispatch(resetStart());

		try{
			const resetResponse = await userApi.resetUser(vals);

			dispatch(reset(formName));
			dispatch(resetSuccess(resetResponse.data.success));
		}
		catch (e) {
			if(e.data.response!.data.errors){
				dispatch(updateSyncErrors(
					formName,
					e.data.response!.data.errors,
					e.data.response!.data.message
				));
			}

			dispatch(resetError(e.data.message));
		}
	};

export default thunkReset;

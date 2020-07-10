import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IResetFormData} from '../../components/ResetPage/ResetForm';
import {RootState} from '../Reducers';
import {ResetActions} from '../Reducers/reset';
import {resetError, resetStart, resetSuccess} from '../Actions/resetActions';
import API from '../../Helpers/API';


export type ResetThunkAction = ThunkAction<void, RootState, unknown, ResetActions>;

const thunkReset = (vals: IResetFormData, formName: string): ResetThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ResetActions>) => {
		dispatch(resetStart());

		const regResponse = await API.resetUser(vals);

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
				dispatch(resetError(regResponse.response!.data.message));
			}
		}
		else{
			dispatch(reset(formName));
			dispatch(resetSuccess(regResponse.success));
		}
	};

export default thunkReset;

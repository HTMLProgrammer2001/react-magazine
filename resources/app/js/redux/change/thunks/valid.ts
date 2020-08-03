import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../index';
import {ChangeActions} from '../reducer';

import {changeError, changeSuccess, changeStart} from '../actions';
import {userApi} from '../../../Helpers/API';
import {toast} from 'react-toastify';


export type ValidThunkAction = ThunkAction<void, RootState, unknown, ChangeActions>;

const thunkValid = (id: string): ValidThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ChangeActions>) => {
		//Start changing
		dispatch(changeStart());

		try{
			//Request
			await userApi.validChange(id);

			//Reset form and success message
			dispatch(changeSuccess());
		}
		catch (e) {
			dispatch(changeError(e.response!.data.message || e.message));
			toast.error(e.response!.data.message || e.message);
		}
	};

export default thunkValid;

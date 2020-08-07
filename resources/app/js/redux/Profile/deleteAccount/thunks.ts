import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {toast} from 'react-toastify';

import {RootState} from '../../';
import {DeleteActions} from './reducer';
import {deleteError, deleteStart, deleteSuccess} from './actions';
import {profileAPI} from '../../../Helpers/API/ProfileAPI';
import {resetUser} from '../../AppState/user/actions';

type DelteTActions = DeleteActions | ReturnType<typeof resetUser>;
export type DeleteThunkAction = ThunkAction<{}, RootState, unknown, DelteTActions>;

const thunkDelete = (): DeleteThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, DelteTActions>) => {
		//Start checkout
		dispatch(deleteStart());

		try{
			//Request
			const deleteResponse = await profileAPI.deleteAccount();

			dispatch(deleteSuccess());
			dispatch(resetUser());
			toast.success(deleteResponse.data.success);
		}
		catch (e) {
			dispatch(deleteError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};

export default thunkDelete;

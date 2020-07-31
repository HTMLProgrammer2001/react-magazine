import {RootState} from '../';
import {LogoutActions} from './reducer';
import {logoutError, logoutStart, logoutSuccess} from './actions';
import {userApi} from '../../Helpers/API';
import {resetUser} from '../AppState/user/actions';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';


export type LogoutThunkAction = ThunkAction<void, RootState, unknown, LogoutActions>;

const thunkLogout = (): LogoutThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, LogoutActions |
		ReturnType<typeof resetUser>>) => {
		//Logout start
		dispatch(logoutStart());

		try {
			//Request
			await userApi.logoutUser();

			//Success
			dispatch(resetUser());
			dispatch(logoutSuccess());
		}
		catch (e) {
			//Error
			dispatch(logoutError(e.data.message));
		}
	};

export default thunkLogout;

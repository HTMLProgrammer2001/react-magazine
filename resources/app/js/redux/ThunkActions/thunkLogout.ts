import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../Reducers';
import {resetUser} from '../Actions/userActions';
import API from '../../Helpers/API';


export type LogoutThunkAction =ThunkAction<void, RootState, unknown, ReturnType<typeof resetUser>>;

const thunkLogout = (): LogoutThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ReturnType<typeof resetUser>>) => {
		const logoutResponse = await API.logoutUser();

		console.log(logoutResponse);

		if(API.isError(logoutResponse)){
			if(logoutResponse.response!.data.errors){
			}
			else{

			}
		}
		else{
			dispatch(resetUser());
		}
	};

export default thunkLogout;

import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {UserActions} from './reducer';
import {
	loadUserStart,
	loadUserSuccessfull,
	loadUserError
} from './actions';
import {userApi} from '../../../Helpers/API';


export type FilterThunkAction = ThunkAction<void, RootState, unknown, UserActions>;

const thunkUser = (): FilterThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, UserActions>) => {
		//Get token
		let token = localStorage.getItem('token');

		//Break
		if(!token) {
			return;
		}

		//Start loading
		dispatch(loadUserStart());

		try {
			//Request
			const userResponse = await userApi.getUser();

			//User loaded
			dispatch(loadUserSuccessfull({
				user: userResponse.data,
				token
			}));
		}
		catch (e) {
			//Error
			dispatch(loadUserError(e.message));
		}
	};

export default thunkUser;

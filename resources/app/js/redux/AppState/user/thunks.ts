import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../';
import {UserActions} from './reducer';
import {
	loadUserStart,
	loadUserSuccessfull,
	loadUserError
} from './actions';
import API from '../../../Helpers/API';


export type FilterThunkAction = ThunkAction<void, RootState, unknown, UserActions>;

const thunkUser = (): FilterThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, UserActions>) => {
		let token = localStorage.getItem('token');

		if(!token)
			return;

		dispatch(loadUserStart());

		const userResponse = await API.getUser();

		if(API.isError(userResponse)){
			dispatch(loadUserError(userResponse.message));
		}
		else{
			dispatch(loadUserSuccessfull({user: userResponse, token}));
		}
	};

export default thunkUser;

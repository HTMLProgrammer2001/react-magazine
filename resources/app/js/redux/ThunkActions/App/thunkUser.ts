import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../Reducers';
import {UserActions} from '../../Reducers/App/user';
import {
	loadUserStart,
	loadUserSuccessfull,
	loadUserError
} from '../../Actions/App/userActions';
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

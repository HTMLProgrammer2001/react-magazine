//My components
import * as actionCreators from '../../Actions/App/userActions';
import {
	USER_LOAD_SUCCESSFULL,
	USER_RESET,
	USER_LOAD_ERROR,
	USER_LOAD_START
} from '../../actionTypes';
import {InferActionTypes} from '../index';
import {IUser} from '../../../Interfaces/IUser';


export type UserActions = InferActionTypes<typeof actionCreators>;

export type UserState = {
	isLoading: boolean,
	error: string,
	token: string | null,
	user: IUser | null
};

const initialState: UserState = {
	isLoading: false,
	error: '',
	token: null,
	user: null
};

const cartReducer = (state: UserState = initialState, action: UserActions): UserState => {
	switch (action.type) {
	case USER_LOAD_START:
		return {...state, isLoading: true};

	case USER_LOAD_ERROR:
		return {...state, isLoading: false, error: action.error};

	case USER_LOAD_SUCCESSFULL:
		localStorage.setItem('token', action.payload.token);
		return {...initialState, user: action.payload.user, token: action.payload.token};

	case USER_RESET:
		return initialState;
	}

	return state;
};

export default cartReducer;

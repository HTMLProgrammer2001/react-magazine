import * as actionCreators from './actions';
import {LOGOUT_ERROR, LOGOUT_SUCCESS, LOGOUT_START} from './types';

import {InferActionTypes} from '../index';


export type LogoutActions = InferActionTypes<typeof actionCreators>;

export type LogoutState = {
	isLoading: boolean,
	error: string | null
};

const initialState: LogoutState = {
	isLoading: false,
	error: null
};

const logoutReducer = (state: LogoutState = initialState, action: LogoutActions): LogoutState => {
	switch (action.type) {
	case LOGOUT_START:
		return {isLoading: true, error: null};

	case LOGOUT_SUCCESS:
		return {...initialState};

	case LOGOUT_ERROR:
		return {isLoading: false, error: action.error};
	}

	return state;
};

export default logoutReducer;

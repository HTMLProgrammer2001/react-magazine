import * as actionCreators from './actions';
import {LOGIN_RESET, LOGIN_RESEND, LOGIN_CLEAR} from './types';

import {InferActionTypes} from '../index';


export type LoginActions = InferActionTypes<typeof actionCreators>;

export type LoginState = {
	needReset: boolean,
	needResend: boolean
};

const initialState: LoginState = {
	needResend: false,
	needReset: false
};

const logoutReducer = (state: LoginState = initialState, action: LoginActions): LoginState => {
	switch (action.type) {
	case LOGIN_RESEND:
		return {needReset: false, needResend: true};

	case LOGIN_RESET:
		return {needResend: false, needReset: true};

	case LOGIN_CLEAR:
		return {...initialState};
	}

	return state;
};

export default logoutReducer;

//My components
import * as actionCreators from './actions';
import {LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_START} from './types';

import {InferActionTypes} from '../';


export type LoginActions = InferActionTypes<typeof actionCreators>;

export type LoginState = {
	error: string | null,
	isLoading: boolean
};

const initialState: LoginState = {
	error: null,
	isLoading: false
};

const loginReducer = (state: LoginState = initialState, action: LoginActions): LoginState => {
	switch (action.type) {
	case LOGIN_START:
		return {error: null, isLoading: true};

	case LOGIN_SUCCESS:
		return {isLoading: false, error: null};

	case LOGIN_ERROR:
		return {error: action.error, isLoading: false};
	}

	return state;
};

export default loginReducer;

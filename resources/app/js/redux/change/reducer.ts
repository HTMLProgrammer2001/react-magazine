//My components
import * as actionCreators from './actions';
import {CHANGE_START, CHANGE_SUCCESS, CHANGE_ERROR} from './types';

import {InferActionTypes} from '../';


export type ChangeActions = InferActionTypes<typeof actionCreators>;

export type ChangeState = {
	error: string | null,
	isLoading: boolean
};

const initialState: ChangeState = {
	error: null,
	isLoading: false
};

const changeReducer = (state: ChangeState = initialState, action: ChangeActions): ChangeState => {
	switch (action.type) {
	case CHANGE_START:
		return {error: null, isLoading: true};

	case CHANGE_SUCCESS:
		return {isLoading: false, error: null};

	case CHANGE_ERROR:
		return {error: action.error, isLoading: false};
	}

	return state;
};

export default changeReducer;

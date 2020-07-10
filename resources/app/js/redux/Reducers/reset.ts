//My components
import * as actionCreators from '../Actions/resetActions';
import {RESET_ERROR, RESET_SUCCESS, RESET_START} from '../actionTypes';
import {InferActionTypes} from './index';


export type ResetActions = InferActionTypes<typeof actionCreators>;

export type ResetState = {
	error: string | null,
	message: string,
	isLoading: boolean
};

const initialState: ResetState = {
	error: null,
	message: '',
	isLoading: false
};

const registerReducer = (state: ResetState = initialState, action: ResetActions): ResetState => {
	switch (action.type) {
	case RESET_START:
		return {isLoading: true, message: '', error: null};

	case RESET_SUCCESS:
		return {isLoading: false, message: action.payload, error: null};

	case RESET_ERROR:
		return {isLoading: false, message: '', error: action.error};
	}

	return state;
};

export default registerReducer;

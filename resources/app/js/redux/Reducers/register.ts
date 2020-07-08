//My components
import * as actionCreators from '../Actions/registerActions';
import {REGISTER_ERROR, REGISTER_SUCCESSFULL, REGISTER_START} from '../actionTypes';
import {InferActionTypes} from './index';


export type RegisterActions = InferActionTypes<typeof actionCreators>;

export type RegisterState = {
	error: string | null,
	message: string,
	isLoading: boolean
};

const initialState: RegisterState = {
	error: null,
	message: '',
	isLoading: false
};

const registerReducer = (state: RegisterState = initialState, action: RegisterActions):
	RegisterState => {
	switch (action.type) {
	case REGISTER_START:
		return {error: null, isLoading: true, message: ''};

	case REGISTER_SUCCESSFULL:
		return {isLoading: false, error: null, message: action.payload};

	case REGISTER_ERROR:
		return {error: action.error, isLoading: false, message: ''};
	}

	return state;
};

export default registerReducer;

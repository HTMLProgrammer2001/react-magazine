import * as actionsCreators from './actions';
import {VERIFY_SUCCESS, VERIFY_ERROR, VERIFY_START} from './types';
import {InferActionTypes} from '../';


export type VerifyActions = InferActionTypes<typeof actionsCreators>;

export type IVerifyState = {
	message: string | null,
	error: string | null,
	isLoading: boolean
}

const initialState: IVerifyState = {
	message: null,
	error: null,
	isLoading: false
};

const verifyReducer = (state: IVerifyState = initialState, action: VerifyActions):IVerifyState => {
	switch (action.type) {
	case VERIFY_START:
		return {message: null, error: null, isLoading: true};

	case VERIFY_ERROR:
		return {message: null, error: action.error, isLoading: false};

	case VERIFY_SUCCESS:
		return {message: action.payload, error: null, isLoading: false};
	}

	return state;
};

export default verifyReducer;

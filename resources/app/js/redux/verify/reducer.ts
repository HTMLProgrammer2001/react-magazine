import * as actionsCreators from './actions';
import {VERIFY_SUCCESS, VERIFY_ERROR, VERIFY_START, VERIFY_NOT_FOUND} from './types';
import {InferActionTypes} from '../';


export type VerifyActions = InferActionTypes<typeof actionsCreators>;

export type IVerifyState = {
	message: string | null,
	error: string | null,
	isLoading: boolean,
	notFound: boolean
}

const initialState: IVerifyState = {
	message: null,
	error: null,
	isLoading: false,
	notFound: false
};

const verifyReducer = (state: IVerifyState = initialState, action: VerifyActions):IVerifyState => {
	switch (action.type) {
	case VERIFY_START:
		return {notFound: false, message: null, error: null, isLoading: true};

	case VERIFY_ERROR:
		return {notFound: false, message: null, error: action.error, isLoading: false};

	case VERIFY_SUCCESS:
		return {message: action.payload, error: null, isLoading: false, notFound: false};

	case VERIFY_NOT_FOUND:
		return {...state, notFound: true, isLoading: false};
	}

	return state;
};

export default verifyReducer;

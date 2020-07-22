//My components
import * as actionCreators from '../Actions/changeActions';
import {CHANGE_SUCCESS, CHANGE_ERROR, CHANGE_START} from '../actionTypes';
import {InferActionTypes} from './index';


export type ChangeActions = InferActionTypes<typeof actionCreators>;

export type ChangeState = {
	error: string | null,
	isLoading: boolean
};

const initialState: ChangeState = {
	error: null,
	isLoading: false
};

const loginReducer = (state: ChangeState = initialState, action: ChangeActions): ChangeState => {
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

export default loginReducer;

//My components
import * as actionCreators from './actions';
import {DELETE_ERROR, DELETE_SUCCESS, DELETE_START} from './types';

import {InferActionTypes} from '../../';


export type DeleteActions = InferActionTypes<typeof actionCreators>;

export type DeleteState = {
	isLoading: boolean,
	error: string
};

const initialState: DeleteState = {
	isLoading: false,
	error: ''
};

const deleteReducer = (state: DeleteState = initialState, action: DeleteActions): DeleteState => {
	switch (action.type) {
	case DELETE_START:
		return {isLoading: true, error: ''};

	case DELETE_SUCCESS:
		return {isLoading: false, error: ''};

	case DELETE_ERROR:
		return {isLoading: false, error: action.error};
	}

	return state;
};

export default deleteReducer;

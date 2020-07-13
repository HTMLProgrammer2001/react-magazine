//My components
import * as actionCreators from '../../Actions/Single/addCommentActions';
import {
	COMMENT_ADD_SUCCESS,
	COMMENT_ADD_ERROR,
	COMMENT_ADD_START
} from '../../actionTypes';
import {InferActionTypes} from '../index';


export type AddCommentActions = InferActionTypes<typeof actionCreators>;

export type AddCommentState = {
	isLoading: boolean,
	error: string | null
};

const initialState: AddCommentState = {
	isLoading: false,
	error: null
};

const addCommentReducer = (state: AddCommentState = initialState, action: AddCommentActions):
	AddCommentState => {
	switch (action.type) {
	case COMMENT_ADD_START:
		return {isLoading: true, error: null};
	case COMMENT_ADD_ERROR:
		return {isLoading: false, error: action.error};
	case COMMENT_ADD_SUCCESS:
		return {isLoading: false, error: null};
	}

	return state;
};

export default addCommentReducer;

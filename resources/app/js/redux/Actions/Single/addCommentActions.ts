import {
	COMMENT_ADD_START,
	COMMENT_ADD_ERROR,
	COMMENT_ADD_SUCCESS
} from '../../actionTypes';


export const commentAddStart = () => (<const>{
	type: COMMENT_ADD_START
});

export const commentAddError = (error: string) => (<const>{
	type: COMMENT_ADD_ERROR,
	error
});

export const commentAddSuccess = () => (<const>{
	type: COMMENT_ADD_SUCCESS
});

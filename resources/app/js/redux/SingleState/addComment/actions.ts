import {COMMENT_ADD_SUCCESS, COMMENT_ADD_ERROR, COMMENT_ADD_START} from './types';


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

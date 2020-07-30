import {
	PRODUCT_COMMENT_START,
	PRODUCT_COMMENT_ERROR,
	PRODUCT_COMMENT_SUCCESS,
	PRODUCT_COMMENT_RESET,
	PRODUCT_COMMENT_REACTION_CHANGE
} from './types';

import {ICommentsResponse} from '../../../Interfaces/Responses/ICommentsResponse';


export const commentStart = () => (<const>{
	type: PRODUCT_COMMENT_START
});

export const commentError = (error: string) => (<const>{
	type: PRODUCT_COMMENT_ERROR,
	error
});

export const commentSuccess = (comments: ICommentsResponse) => (<const>{
	type: PRODUCT_COMMENT_SUCCESS,
	payload: comments
});

export const commentReset = () => (<const>{
	type: PRODUCT_COMMENT_RESET
});

export const commentReactionChange = (commentID: number, reaction: string) => (<const>{
	type: PRODUCT_COMMENT_REACTION_CHANGE,
	payload: {commentID, reaction}
});

//My components
import * as actionCreators from '../../Actions/Single/commentsActions';
import {
	PRODUCT_COMMENT_RESET,
	PRODUCT_COMMENT_START,
	PRODUCT_COMMENT_SUCCESS,
	PRODUCT_COMMENT_ERROR,
	PRODUCT_COMMENT_REACTION_CHANGE
} from '../../actionTypes';
import {InferActionTypes} from '../index';
import {IComment} from '../../../Interfaces/IComment';


export type CommentActions = InferActionTypes<typeof actionCreators>;

export type CommentState = {
	totalCount: number,
	currentPage: number,
	isLoading: boolean,
	error: string | null,
	comments: Array<IComment>
};

const initialState: CommentState = {
	totalCount: 0,
	currentPage: 0,
	isLoading: false,
	error: null,
	comments: []
};

const commentReducer = (state: CommentState = initialState, action: CommentActions):
	CommentState => {
	switch (action.type) {
	case PRODUCT_COMMENT_RESET:
		return {...initialState};

	case PRODUCT_COMMENT_START:
		return {
			...state,
			isLoading: true,
			error: null
		};

	case PRODUCT_COMMENT_ERROR:
		return {
			...state,
			isLoading: false,
			error: action.error
		};

	case PRODUCT_COMMENT_SUCCESS:
		return {
			...state,
			totalCount: action.payload.meta.total,
			currentPage: action.payload.meta.current_page,
			isLoading: false,
			error: null,
			comments: [...state.comments, ...action.payload.data]
		};

	case PRODUCT_COMMENT_REACTION_CHANGE:
		return {
			...state,
			comments: state.comments.map((comment) => {
				//Return comment without change
				if(comment.id != action.payload.commentID)
					return comment;

				//Create new comment
				let newComment = {
					...comment,
					curReaction: action.payload.reaction
				};

				//Set new value of likes and dislikes
				newComment.likes = comment.curReaction == 'up' && comment.curReaction ?
					comment.likes - 1 :
					comment.likes + 1;

				newComment.dislikes = comment.curReaction == 'down' && comment.curReaction ?
					comment.dislikes - 1 :
					comment.dislikes + 1;

				return newComment;
			})
		};
	}

	return state;
};

export default commentReducer;

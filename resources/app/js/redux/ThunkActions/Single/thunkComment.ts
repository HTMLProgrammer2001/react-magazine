import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {formValueSelector} from 'redux-form';

import {RootState} from '../../Reducers';
import {CommentActions} from '../../Reducers/Single/comments';
import {commentError, commentStart, commentSuccess} from '../../Actions/Single/commentsActions';
import API from '../../../Helpers/API';


export type CommentThunkAction = ThunkAction<void, RootState, unknown, CommentActions>;

const thunkComment = (productID: number, offset: number = 1): CommentThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, CommentActions>, getState) => {
		dispatch(commentStart());

		const selector = formValueSelector('sortReviewsForm');
		const sortType = selector(getState(), 'type');

		const commentResponse = await API.getComments(productID, offset, sortType);

		if(API.isError(commentResponse)){
			dispatch(commentError(commentResponse.message));
		}
		else{
			dispatch(commentSuccess(commentResponse));
		}
	};

export default thunkComment;

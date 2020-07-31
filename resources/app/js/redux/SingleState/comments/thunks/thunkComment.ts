import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {formValueSelector} from 'redux-form';

import {CommentActions} from '../reducer';

import {commentSuccess, commentError, commentStart} from '../actions';
import {dataApi} from '../../../../Helpers/API';
import {RootState} from '../../../index';


export type CommentThunkAction = ThunkAction<void, RootState, unknown, CommentActions>;

const thunkComment = (productID: number, offset: number = 1): CommentThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, CommentActions>, getState) => {
		dispatch(commentStart());

		const selector = formValueSelector('sortReviewsForm');
		const sortType = selector(getState(), 'type');

		try{
			const commentResponse = await dataApi.getComments(productID, offset, sortType);
			
			dispatch(commentSuccess(commentResponse.data));
		}
		catch (e) {
			dispatch(commentError(e.data.response!.data.message));
		}
	};

export default thunkComment;
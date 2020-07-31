import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IReviewFormData} from '../../../components/SinglePage/Reviews/ReviewForm';
import {RootState} from '../../';
import {AddCommentActions} from './reducer';

import {commentAddSuccess, commentAddStart, commentAddError} from './actions';
import {dataApi} from '../../../Helpers/API';


export type AddCommentThunkAction = ThunkAction<void, RootState, unknown, AddCommentActions>;

const thunkAddComment = (productID: number, vals: IReviewFormData, formName: string):
	AddCommentThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, AddCommentActions>) => {
		dispatch(commentAddStart());

		try{
			await dataApi.addComment(productID, vals);

			dispatch(reset(formName));
			dispatch(commentAddSuccess());
		}
		catch (e) {
			if(e.data.response!.data.errors){
				dispatch(updateSyncErrors(
					formName,
					e.data.response!.data.errors,
					e.data.response!.data.message
				));
			}

			dispatch(commentAddError(e.data.response!.data.message));
		}
	};

export default thunkAddComment;

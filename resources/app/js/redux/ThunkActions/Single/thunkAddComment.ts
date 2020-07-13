import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {updateSyncErrors, reset} from 'redux-form';

import {IReviewFormData} from '../../../components/SinglePage/Reviews/ReviewForm';
import {RootState} from '../../Reducers';
import {AddCommentActions} from '../../Reducers/Single/addComment';
import {
	commentAddError,
	commentAddStart,
	commentAddSuccess
} from '../../Actions/Single/addCommentActions';
import API from '../../../Helpers/API';


export type AddCommentThunkAction = ThunkAction<void, RootState, unknown, AddCommentActions>;

const thunkAddComment = (productID: number, vals: IReviewFormData, formName: string):
	AddCommentThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, AddCommentActions>) => {
		dispatch(commentAddStart());

		const addCommentResponse = await API.addComment(productID, vals);

		console.log(addCommentResponse);

		if(API.isError(addCommentResponse)){
			if(addCommentResponse.response!.data.errors){
				dispatch(updateSyncErrors(
					formName,
					addCommentResponse.response!.data.errors,
					addCommentResponse.response!.data.message
				));
			}
			else{
				dispatch(commentAddError(addCommentResponse.response!.data.message));
			}
		}
		else{
			dispatch(reset(formName));
			dispatch(commentAddSuccess());
		}
	};

export default thunkAddComment;

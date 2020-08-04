import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {reset, startSubmit, stopSubmit, FormAction} from 'redux-form';

import {IReviewFormData} from '../../../components/SinglePage/Reviews/ReviewForm';
import {RootState} from '../../';

import {dataApi} from '../../../Helpers/API';
import {toast} from 'react-toastify';
import {commentReset} from '../comments/actions';
import thunkComment from '../comments/thunks/thunkComment';


type AddCommentActions = any;
export type AddCommentThunkAction = ThunkAction<void, RootState, unknown, AddCommentActions>;

const thunkAddComment = (productID: number, vals: IReviewFormData, formName: string):
	AddCommentThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, AddCommentActions>) => {
		dispatch(startSubmit(formName));

		try{
			const addCommResponse = await dataApi.addComment(productID, vals);

			dispatch(reset(formName));
			dispatch(commentReset());
			dispatch(thunkComment(productID));

			toast.success(addCommResponse.data.success);
		}
		catch (e) {
			dispatch(stopSubmit(formName, {
				_error: e.response?.data.message || e.message,
				...e.response?.data.errors
			}));

			toast.error(e.response?.data.message || e.message);
		}
	};

export default thunkAddComment;

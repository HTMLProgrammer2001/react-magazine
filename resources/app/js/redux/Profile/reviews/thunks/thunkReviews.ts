import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {getFormValues} from 'redux-form';

import {ReviewsActions} from '../reducer';

import {reviewsStart, reviewsError, reviewsSuccess} from '../actions';
import {profileAPI} from '../../../../Helpers/API/ProfileAPI';
import {RootState} from '../../../index';
import {toast} from 'react-toastify';
import {selectReviewsSize} from '../selectors';
import {IReviewsFormData} from '../../../../components/Profile/ReviewsPage/ReviewsForm';


export type ReviewsThunkAction = ThunkAction<void, RootState, unknown, ReviewsActions>;

const thunkReviews = (offset: number = 1): ReviewsThunkAction =>
	async (dispatch: ThunkDispatch<{}, {}, ReviewsActions>, getState) => {
		dispatch(reviewsStart());

		const orderForm = <IReviewsFormData>getFormValues('reviewsFind')(getState());
		console.log(orderForm);

		const size = selectReviewsSize(getState());

		try{
			const reviewsResponse = await profileAPI.getReviews(offset, size, orderForm);

			dispatch(reviewsSuccess(reviewsResponse.data));
		}
		catch (e) {
			dispatch(reviewsError(e.response?.data.message || e.message));
			toast.error(e.response?.data.message || e.message);
		}
	};

export default thunkReviews;

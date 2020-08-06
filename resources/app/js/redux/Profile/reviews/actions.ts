import {
	REVIEWS_ERROR,
	REVIEWS_RESET,
	REVIEWS_START,
	REVIEWS_SUCCESS
} from './types';
import {IReviewsResponse} from '../../../Interfaces/Responses/IReviewsResponse';


export const reviewsStart = () => (<const>{
	type: REVIEWS_START
});

export const reviewsError = (error: string) => (<const>{
	type: REVIEWS_ERROR,
	error
});

export const reviewsSuccess = (resp: IReviewsResponse) => (<const>{
	type: REVIEWS_SUCCESS,
	payload: resp
});

export const reviewsReset = () => (<const>{
	type: REVIEWS_RESET
});

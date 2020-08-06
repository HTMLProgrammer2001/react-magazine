//My components
import * as actionCreators from './actions';
import {
	REVIEWS_RESET,
	REVIEWS_SUCCESS,
	REVIEWS_ERROR,
	REVIEWS_START
} from './types';

import {InferActionTypes} from '../../';
import {IFullComment} from '../../../Interfaces/IFullComment';


export type ReviewsActions = InferActionTypes<typeof actionCreators>;

export type ReviewsState = {
	totalCount: number,
	currentPage: number,
	isLoading: boolean,
	error: string | null,
	size: number,
	reviews: IFullComment[]
};

const initialState: ReviewsState = {
	totalCount: 0,
	currentPage: 1,
	isLoading: false,
	error: null,
	size: 5,
	reviews: []
};

const reviewsReducer = (state: ReviewsState = initialState, action: ReviewsActions):
	ReviewsState => {
	switch (action.type) {
	case REVIEWS_RESET:
		return {...initialState};

	case REVIEWS_START:
		return {
			...state,
			isLoading: true,
			error: null
		};

	case REVIEWS_ERROR:
		return {
			...state,
			isLoading: false,
			error: action.error
		};

	case REVIEWS_SUCCESS:
		return {
			...state,
			totalCount: action.payload.meta.total,
			currentPage: action.payload.meta.current_page,
			isLoading: false,
			error: null,
			reviews: action.payload.data
		};
	}

	return state;
};

export default reviewsReducer;

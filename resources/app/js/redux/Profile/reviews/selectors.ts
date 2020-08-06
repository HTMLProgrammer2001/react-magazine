import {RootState} from '../../index';

export const selectReviewsState = (state: RootState) => state.profile.reviews;
export const selectReviewsSize = (state: RootState) => state.profile.reviews.size;

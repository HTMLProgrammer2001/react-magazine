import {RootState} from '../../index';

export const selectRecommendState = (state: RootState) => state.profile.recommend;
export const selectRecommendProducts = (state: RootState) => state.profile.recommend.products;

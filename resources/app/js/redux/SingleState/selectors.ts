import {RootState} from '../index';

export const selectSingleProduct = (state: RootState) => state.single.product;
export const selectIsLiked = (state: RootState) => state.single.product.data!.liked;
export const selectSingleID = (state: RootState) => state.single.product.data!.id;
export const selectSingleComments = (state: RootState) => state.single.comments;

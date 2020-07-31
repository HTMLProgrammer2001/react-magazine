import {RootState} from '../index';

export const selectSearchState = (state: RootState) => state.search;
export const selectSearchProducts = (state: RootState) => state.search.products;
export const selectSearchLength = (state: RootState) => state.search.products.length;

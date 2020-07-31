import {RootState} from '../';

export const selectCategories = (state: RootState) => state.categories.categories;
export const selectCategoriesState = (state: RootState) => state.categories;

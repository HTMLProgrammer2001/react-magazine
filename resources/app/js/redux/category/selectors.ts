import {RootState} from '../';

const selectCategories = (state: RootState) => state.categories.categories;
const selectCategoriesLoaded = (state: RootState) => state.categories.loaded;
const selectCategoriesLoading = (state: RootState) => state.categories.isLoading;

export default {
	selectCategories,
	selectCategoriesLoaded,
	selectCategoriesLoading
};

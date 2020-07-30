//My components
import * as actionCreators from './actions';
import {CATEGORY_LOAD_SUCCESS, CATEGORY_LOAD_ERROR, CATEGORY_LOAD_START} from './types';

import {InferActionTypes} from '../';
import {ICategory} from '../../Interfaces/ICategory';


//Action type
export type CategoryActions = InferActionTypes<typeof actionCreators>;

export type CategoryState = {
	isLoading: boolean,
	error: string | null,
	loaded: boolean,
	categories: Array<ICategory>
};

const initialState: CategoryState = {
	isLoading: false,
	loaded: false,
	error: null,
	categories: []
};

const categoryReducer = (state: CategoryState = initialState,
						 action: CategoryActions): CategoryState => {
	switch (action.type) {
	case CATEGORY_LOAD_START:
		return {...state, isLoading: true, error: null};

	case CATEGORY_LOAD_ERROR:
		return {...state, isLoading: false, error: action.error};

	case CATEGORY_LOAD_SUCCESS:
		return {categories: action.payload, isLoading: false, error: null, loaded: true};
	}

	return state;
};

export default categoryReducer;

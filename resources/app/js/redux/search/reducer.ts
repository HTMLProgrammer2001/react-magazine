//My components
import * as actionCreators from './actions';
import {SEARCH_SUCCESS, SEARCH_ERROR, SEARCH_START} from './types';
import {InferActionTypes} from '../';
import {IProduct} from '../../Interfaces/IProduct';


export type SearchActions = InferActionTypes<typeof actionCreators>;

export type SearchState = {
	error: string | null,
	products: IProduct[],
	currentPage: number,
	totalCount: number,
	search: string,
	isLoading: boolean
};

const initialState: SearchState = {
	error: null,
	products: [],
	totalCount: 0,
	currentPage: 1,
	search: '',
	isLoading: false
};

const searchReducer = (state: SearchState = initialState, action: SearchActions):
	SearchState => {
	switch (action.type) {
	case SEARCH_START:
		return {...state, search: action.payload, isLoading: true, error: null};

	case SEARCH_SUCCESS:
		return {
			...state,
			isLoading: false,
			products: [...state.products, ...action.payload.data],
			totalCount: action.payload.total,
			currentPage: action.payload.current_page,
			error: null
		};

	case SEARCH_ERROR:
		return {...state, isLoading: false, error: action.error};
	}

	return state;
};

export default searchReducer;

//My components
import * as actionCreators from './actions';
import {
	PRODUCT_LIST_ERROR,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_START,
	PRODUCT_LIST_RESET
} from './types';
import {InferActionTypes} from '../';
import {IProduct} from '../../Interfaces/IProduct';


export type ProductListActions = InferActionTypes<typeof actionCreators>;

export type ProductListState = {
	totalCount: number,
	currentPage: number,
	isLoading: boolean,
	error: string | null,
	products: IProduct[]
};

const initialState: ProductListState = {
	totalCount: 0,
	currentPage: 0,
	isLoading: false,
	error: null,
	products: []
};

const productListReducer = (state: ProductListState = initialState, action: ProductListActions)
	: ProductListState => {
	switch (action.type) {
	case PRODUCT_LIST_RESET:
		return {...initialState};

	case PRODUCT_LIST_START:
		return {...state, error: null, isLoading: false};

	case PRODUCT_LIST_ERROR:
		return {...state, isLoading: false, error: action.error};

	case PRODUCT_LIST_SUCCESS:
		return {
			...state,
			isLoading: false,
			error: null,
			products: [...state.products, ...action.payload.data],
			totalCount: action.payload.total,
			currentPage: action.payload.current_page
		};
	}

	return state;
};

export default productListReducer;

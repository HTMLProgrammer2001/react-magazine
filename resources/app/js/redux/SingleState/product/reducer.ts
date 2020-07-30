//My components
import * as actionCreators from './actions';
import {PRODUCT_START, PRODUCT_SUCCESS, PRODUCT_ERROR, PRODUCT_LIKE_CHANGE} from './types';

import {InferActionTypes} from '../../';
import {IFullProduct} from '../../../Interfaces/IFullProduct';


export type ProductActions = InferActionTypes<typeof actionCreators>;

export type ProductState = {
	isLoading: boolean,
	error: string | null,
	data: IFullProduct | null
};

const initialState: ProductState = {
	isLoading: false,
	error: null,
	data: null
};

const productReducer = (state: ProductState = initialState, action: ProductActions):
	ProductState => {
	switch (action.type) {
	case PRODUCT_START:
		return {isLoading: true, error: null, data: null};

	case PRODUCT_ERROR:
		return {isLoading: false, error: action.error, data: null};

	case PRODUCT_SUCCESS:
		return {isLoading: false, error: null, data: action.payload};

	case PRODUCT_LIKE_CHANGE:
		if(state.data)
			return {...state, data: {...state.data, liked: action.payload}};
	}

	return state;
};

export default productReducer;

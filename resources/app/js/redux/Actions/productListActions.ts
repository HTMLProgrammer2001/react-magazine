import {
	PRODUCT_LIST_ERROR,
	PRODUCT_LIST_RESET,
	PRODUCT_LIST_START,
	PRODUCT_LIST_SUCCESS
} from '../actionTypes';

import {IProductsResponse} from '../../Interfaces/Responses/IProductsResponse';


export const productListStart = () => (<const>{
	type: PRODUCT_LIST_START
});

export const productListSuccess = (productResponse: IProductsResponse) => (<const>{
	type: PRODUCT_LIST_SUCCESS,
	payload: productResponse
});

export const productListError = (error: string) => (<const>{
	type: PRODUCT_LIST_ERROR,
	error
});

export const productListReset = () => (<const>{
	type: PRODUCT_LIST_RESET
});

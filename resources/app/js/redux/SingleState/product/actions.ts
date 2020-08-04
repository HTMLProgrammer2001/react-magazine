import {
	PRODUCT_LIKE_CHANGE,
	PRODUCT_ERROR,
	PRODUCT_SUCCESS,
	PRODUCT_START,
	PRODUCT_NOT_FOUND
} from './types';

import {IFullProduct} from '../../../Interfaces/IFullProduct';


export const productStart = () => (<const>{
	type: PRODUCT_START
});

export const productError = (error: string) => (<const>{
	type: PRODUCT_ERROR,
	error
});

export const productSuccess = (product: IFullProduct) => (<const>{
	type: PRODUCT_SUCCESS,
	payload: product
});

export const productLikeChange = (liked: boolean) => (<const>{
	type: PRODUCT_LIKE_CHANGE,
	payload: liked
});

export const productNotFound = () => (<const>{
	type: PRODUCT_NOT_FOUND
});

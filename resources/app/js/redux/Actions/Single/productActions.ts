import {
	PRODUCT_START,
	PRODUCT_SUCCESS,
	PRODUCT_ERROR,
	PRODUCT_LIKE_CHANGE
} from '../../actionTypes';

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

import {RECOMMEND_LOAD_ERROR, RECOMMEND_LOAD_START, RECOMMEND_LOAD_SUCCESS} from './types';
import {IProduct} from '../../../Interfaces/IProduct';


export const recommendStart = () => (<const>{
	type: RECOMMEND_LOAD_START
});

export const recommendError = (error: string) => (<const>{
	type: RECOMMEND_LOAD_ERROR,
	error
});

export const recommendSuccess = (products: IProduct[]) => (<const>{
	type: RECOMMEND_LOAD_SUCCESS,
	payload: products
});

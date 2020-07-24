import {
	CART_RESET,
	CART_ADD,
	CART_REMOVE,
	CART_UPDATE,
	CART_LOAD_START,
	CART_LOAD_ERROR,
	CART_LOAD_SUCCESS
} from '../../actionTypes';
import {ICartItem} from '../../../Interfaces/ICartItem';


//Cart action creators
export const cartAdd = (product: ICartItem) => (<const>{
	type: CART_ADD,
	payload: product
});

export const cartRemove = (index: number) => (<const>{
	type: CART_REMOVE,
	payload: index
});

export const cartReset = () => (<const>{
	type: CART_RESET
});

export const cartLoadStart = () => (<const>{
	type: CART_LOAD_START
});

export const cartLoadError = (error: string) => (<const>{
	type: CART_LOAD_ERROR,
	error
});

export const cartLoadSuccess = (products: ICartItem[]) => (<const>{
	type: CART_LOAD_SUCCESS,
	payload: products
});

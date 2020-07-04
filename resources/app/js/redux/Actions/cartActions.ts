import {
	CART_RESET,
	CART_ADD,
	CART_REMOVE,
	CART_UPDATE
} from '../actionTypes';
import {ICartItem} from '../../Interfaces/ICartItem';


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

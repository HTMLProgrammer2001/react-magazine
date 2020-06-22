import {IProduct} from '../../Interfaces/IProduct';
import {
	CART_RESET,
	CART_ADD,
	CART_REMOVE,
	CART_UPDATE
} from '../actionTypes';


//Cart action creators
export const cartAdd = (product: IProduct) => (<const>{
	type: CART_ADD,
	payload: product
});

export const cartRemove = (id: number) => (<const>{
	type: CART_REMOVE,
	payload: id
});

export const cartReset = () => (<const>{
	type: CART_RESET
});

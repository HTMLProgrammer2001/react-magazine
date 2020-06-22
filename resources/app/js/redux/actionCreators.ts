import * as types from './actionTypes';
import {ICategory} from '../Interfaces/ICategory';
import {IProduct} from '../Interfaces/IProduct';


//Cart action creators
export const cartAdd = (product: IProduct) => ({
	type: types.CART_ADD,
	payload: product
});

export const cartRemove = (id: number) => ({
	type: types.CART_REMOVE,
	payload: id
});

export const cartReset = () => ({
	type: types.CART_RESET
});

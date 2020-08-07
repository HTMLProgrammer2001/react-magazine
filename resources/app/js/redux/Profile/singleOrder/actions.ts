import {
	SINGLE_ORDER_ERROR,
	SINGLE_ORDER_NOT_FOUND,
	SINGLE_ORDER_START,
	SINGLE_ORDER_SUCCESS
} from './types';
import {IFullOrder} from '../../../Interfaces/IFullOrder';


export const singleOrderStart = () => (<const>{
	type: SINGLE_ORDER_START
});

export const singleOrderError = (error: string) => (<const>{
	type: SINGLE_ORDER_ERROR,
	error
});

export const singleOrderSuccess = (order: IFullOrder) => (<const>{
	type: SINGLE_ORDER_SUCCESS,
	payload: order
});

export const singleOrderNotFound = () => (<const>{
	type: SINGLE_ORDER_NOT_FOUND
});

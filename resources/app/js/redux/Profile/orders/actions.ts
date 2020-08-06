import {
	ORDERS_ERROR,
	ORDERS_RESET,
	ORDERS_START,
	ORDERS_SUCCESS
} from './types';
import {IOrdersResponse} from '../../../Interfaces/Responses/IOrdersResponse';


export const ordersStart = () => (<const>{
	type: ORDERS_START
});

export const ordersError = (error: string) => (<const>{
	type: ORDERS_ERROR,
	error
});

export const ordersSuccess = (resp: IOrdersResponse) => (<const>{
	type: ORDERS_SUCCESS,
	payload: resp
});

export const ordersReset = () => (<const>{
	type: ORDERS_RESET
});

import {CHECKOUT_START, CHECKOUT_ERROR, CHECKOUT_SUCCESS} from './types';


export const checkoutStart = () => (<const>{
	type: CHECKOUT_START
});

export const checkoutSuccess = (message: string) => (<const>{
	type: CHECKOUT_SUCCESS,
	payload: message
});

export const checkoutError = (error: string) => (<const>{
	type: CHECKOUT_ERROR,
	error
});

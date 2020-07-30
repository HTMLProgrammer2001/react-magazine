import {REGISTER_ERROR, REGISTER_SUCCESSFULL, REGISTER_START} from './types';


export const registerStart = () => (<const>{
	type: REGISTER_START
});

export const registerSuccess = (message: string) => (<const>{
	type: REGISTER_SUCCESSFULL,
	payload: message
});

export const registerError = (error: string) => (<const>{
	type: REGISTER_ERROR,
	error
});

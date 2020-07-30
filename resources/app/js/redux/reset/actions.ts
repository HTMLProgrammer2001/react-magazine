import {
	RESET_ERROR,
	RESET_START,
	RESET_SUCCESS
} from './types';


export const resetStart = () => (<const>{
	type: RESET_START
});

export const resetSuccess = (message: string) => (<const>{
	type: RESET_SUCCESS,
	payload: message
});

export const resetError = (error: string) => (<const>{
	type: RESET_ERROR,
	error
});

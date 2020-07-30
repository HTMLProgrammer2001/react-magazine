import {
	VERIFY_ERROR,
	VERIFY_START,
	VERIFY_SUCCESS
} from './types';


export const verifyStart = () => (<const>{
	type: VERIFY_START
});

export const verifyError = (error: string) => (<const>{
	type: VERIFY_ERROR,
	error
});

export const verifySuccess = (message: string) => (<const>{
	type: VERIFY_SUCCESS,
	payload: message
});

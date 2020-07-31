import {LOGOUT_ERROR, LOGOUT_START, LOGOUT_SUCCESS} from './types';


export const logoutStart = () => (<const>{
	type: LOGOUT_START
});

export const logoutSuccess = () => (<const>{
	type: LOGOUT_SUCCESS
});

export const logoutError = (error: string) => (<const>{
	type: LOGOUT_ERROR,
	error
});

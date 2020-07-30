import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from './types';


export const loginStart = () => (<const>{
	type: LOGIN_START
});

export const loginSuccess = () => (<const>{
	type: LOGIN_SUCCESS
});

export const loginError = (error: string) => (<const>{
	type: LOGIN_ERROR,
	error
});

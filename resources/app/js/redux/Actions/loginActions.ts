import {
	LOGIN_ERROR,
	LOGIN_START,
	LOGIN_SUCCESS
} from '../actionTypes';

import {IUser} from '../../Interfaces/IUser';


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

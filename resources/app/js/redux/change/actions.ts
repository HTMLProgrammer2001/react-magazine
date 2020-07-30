import {CHANGE_ERROR, CHANGE_SUCCESS, CHANGE_START} from './types';


export const changeStart = () => (<const>{
	type: CHANGE_START
});

export const changeError = (error: string) => (<const>{
	type: CHANGE_ERROR,
	error
});

export const changeSuccess = () => (<const>{
	type: CHANGE_SUCCESS
});

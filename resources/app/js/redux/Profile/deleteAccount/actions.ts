import {DELETE_ERROR, DELETE_START, DELETE_SUCCESS} from './types';


export const deleteStart = () => (<const>{
	type: DELETE_START
});

export const deleteSuccess = () => (<const>{
	type: DELETE_SUCCESS
});

export const deleteError = (error: string) => (<const>{
	type: DELETE_ERROR,
	error
});

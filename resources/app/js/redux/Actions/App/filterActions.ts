import {
	FILTER_ERROR,
	FILTER_START,
	FILTER_SUCCESS
} from '../../actionTypes';


export const filterStart = () => (<const>{
	type: FILTER_START
});

export const filterSuccess = (filters: any) => (<const>{
	type: FILTER_SUCCESS,
	payload: filters
});

export const filterError = (error: string) => (<const>{
	type: FILTER_ERROR,
	error
});

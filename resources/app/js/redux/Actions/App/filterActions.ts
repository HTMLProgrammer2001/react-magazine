import {
	FILTER_ERROR,
	FILTER_START,
	FILTER_SUCCESS
} from '../../actionTypes';

import {IFilter} from '../../../Interfaces/IFilter';


export const filterStart = () => (<const>{
	type: FILTER_START
});

export const filterSuccess = (filters: IFilter) => (<const>{
	type: FILTER_SUCCESS,
	payload: filters
});

export const filterError = (error: string) => (<const>{
	type: FILTER_ERROR,
	error
});

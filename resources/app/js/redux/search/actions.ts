import {
	SEARCH_START,
	SEARCH_ERROR,
	SEARCH_SUCCESS, SEARCH_RESET
} from './types';
import {ISearchResponse} from '../../Interfaces/Responses/ISearchResponse';


export const searchStart = (search: string) => (<const>{
	type: SEARCH_START,
	payload: search
});

export const searchError = (error: string) => (<const>{
	type: SEARCH_ERROR,
	error
});

export const searchSuccess = (response: ISearchResponse) => (<const>{
	type: SEARCH_SUCCESS,
	payload: response
});

export const searchReset = () => (<const>{
	type: SEARCH_RESET
});

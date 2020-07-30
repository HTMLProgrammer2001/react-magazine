import {
	SEARCH_START,
	SEARCH_ERROR,
	SEARCH_SUCCESS
} from './types';
import {IProduct} from '../../Interfaces/IProduct';
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

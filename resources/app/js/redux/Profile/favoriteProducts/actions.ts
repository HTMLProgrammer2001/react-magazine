import {FAVORITE_DELETE, FAVORITE_ERROR, FAVORITE_RESET, FAVORITE_START, FAVORITE_SUCCESS} from './types';

import {IFavoriteResponse} from '../../../Interfaces/Responses/IFavoriteResponse';


export const favoriteStart = () => (<const>{
	type: FAVORITE_START
});

export const favoriteSuccess = (resp: IFavoriteResponse) => (<const>{
	type: FAVORITE_SUCCESS,
	payload: resp
});

export const favoriteError = (error: string) => (<const>{
	type: FAVORITE_ERROR,
	error
});

export const favoriteReset = () => (<const>{
	type: FAVORITE_RESET
});

export const favoriteDelete = (id: number) => (<const>{
	type: FAVORITE_DELETE,
	payload: id
});
